# Latency Data PoC

After first team meeting it surge a few discussions about different points of view.

This subjects was:
- Express vs Nestjs
- Monorepo. Nx vs Turborepo
- Dependency injection
- Transpiler. SWC vs Esbuild.

To explore all alternatives we are building this repository to select a correct option. 
So, we are going to explain every point and conclusions.

## Express vs NestJS

In first place. We created a single project with express following a approach that offer on your courses CodelyTv (https://github.com/CodelyTV/typescript-ddd-example).
Starting from this point, we are iterating across few versions to conclude with a easy, simply and robust version.

### `latency-express-v1`
In first versions, we are focused on **routing system**. In first place, we created a express server with a function to register all routers.
This routes are registered from other file that uses `glob` library to match files. 
So, the file `routes.ts` has responsability to find on file system all files that ends with `.route.*`, get function `register` that it will be defined inside and call this function.
This is a hot point. Because, anyone could forget define a correct function and break system there. 
A important point is that controller and routing is on 2 different files. 

Other key point was **Dependency Injection**. On the meeting we evaluate different approaches of Dependency Injections. 
We decide use DIOD (https://github.com/artberri/diod#readme) in first versions because is simply and easy to configure. And it saved a lot time by the moment.
To use, only define a `container.ts` file that contains all application configuration.
The cons with Diod is that force us to use annotations with each service that define on DI. But a pro is that we can use a custom annotation. 
Thus, we created 3 custom annotations to use with DI (`Controller`, `Service`, `Repository`).

To allow represent any **modules** we created some modules (auth, dashboard and user). 
Each module, simply contains a controller, route and service (on the next versions it will evolve). The minium to configure a first simply version. 

With all this, we already have a first useful version of Express app. 


### `latency-express-v2`
In this iteration, we were focused on **improve routing system**. First of all, we removed a concept of routes. 
Now, `routes.ts` file get all `*.controller.ts` files and add functions on Express routing system.
In this version, we add a controller config inside Controllers by abstract method. 
So, all controllers should override a config method to can registered.
This approach keep be fragile. Because if anyone forget add this config or write a controller on a filename, it could break system.
But, we achieve join Controller config and functions. 


### `latency-express-v3`
In this iteration, we achieve remove use of `glob` library to match files and replace with tags into DI definition. 
To define that a class are controller, we code the next lines on container definition: 

'''
builder.registerAndUse(UserController).addTag(DiTag.CONTROLLER)
'''

In this way, on routing we retrieve all defined services with tag `DiTag.CONTROLLER` and register on Router.


### `latency-express-v4`
The change from the previous version is that we replace config method of Controller class to add parameter of Controller. 
Also, we replace Controller annotation to 4 annotations to GET, POST, PUT and DELETE (it could add more if we need on the future).
This annotations now save data to configure Router.


### `latency-express-v5`
On this version, we focused on split `container.ts` on modules config. 
This achieve with a new `DiContainer` function that register all generic services and with `glob` library search all `*.module.*` on project and register Module services.


### `latency-express-v6`
Finally, on this version we add tests with jest. We are tried to add tests with `node:test`. 
But in any cases it is not sufficient to build robust testing by the moment.

### `latency-express`
To conclude. On final version, we improve module importation and remove glob library of any scope. 
It is important because to bundle app with `esbuild` generate a single file and cannot match any file. And It not worked with import dynamically.  

## Monorepo. Nx vs Turborepo


## Dependency injection


## Transpiler. SWC vs Esbuild.
