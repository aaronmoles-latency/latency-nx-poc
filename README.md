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
The change from the previous version is that we replace config method of Controller classes to add parameter of Controller. 
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


### latency-nest

By the other hand, we wanted to try **NestJs** to compare with Express. We developed the same of last project `latency express` on less than half time. 
You can watch the result on folder `latency-nest`.

### 📝 Conclusions

Express and NestJs are very different. Express only enable a few features to create your API and NestJS provides same that Express and a lot of features more above HTTP layer that extends API to next level.
So, Express allow us to build a system with very flexibility, choosing tools or libraries that we want, while in NestJS requires that works like they propose. 
Even though, in some cases we can extends NestJS with our implementations without problem. 

## Monorepo. Nx vs Turborepo

### Nx
In this repo, we are using NX to manage monorepo.

Key point, very complex to configure. 
Documentation is very poor and not found many examples. 
Finally I achieve to build a complete project with this tool.

Exists 2 types of monorepositories:

#### Integrated Repo

- Allows create multiple apps with same package.json. This approach it’s perfect to microservices because share all node_modules. So, in principe this approach not ajust our necesities.
- Not use NPM, Yarn or PNPM worspaces. it use a virtual workspaces.
- Build with @nrwl/webpack. Result is a single index.js file with all libraries included inside.

#### Packaged-Based Repo

- This mode allows to create multiple independient packages.
- Uses a NPM worksapces and have independient and extensible package.json.
- Not have support to build. To can build app its necessary use tsc, @swc or other tool. Finally to build all server into a single file i used **Esbuild.**
- Multiple workspaces (api, apps, packages)
- With Esbuild we can link different packages and with nx graph we can show dependencies between apps and packages.

It’s importat to emphasy that with a extra configuration it’s possible utilize Nx to manage multi-language repository. Though this tools was builded to manage node modules.

### Turborepo

Turborepo is an intelligent build system optimized for JavaScript and TypeScript codebases. 
It enables a simply mode to manage monorepository.

Documentation is very wide and exists multiple examples.

With a installation give us a complete example with Next applications.

It’s very similar to Nx but more modern.

Only support to JS/TS projects. But it is possible create other project with package.json without dependencies.


## Dependency injection
We are using DIOD because is simply and easy to configure and we can use autowiring and tags by default. 
And other important thing is because not dirty our code with external libraries annotations our classes. Otherwise, we use our private annotations. 

On typescript word exists multiple options like:
- Inversify (https://github.com/inversify/InversifyJS): more powerfull. But, more complex to configure. Currently is most complet DI. It used by NestJs.
- Node dependency injection (https://github.com/zazoomauro/node-dependency-injection)
- tsyringe (https://github.com/microsoft/tsyringe)
- Autofac (https://github.com/autofac/Autofac)
- Ninject (https://github.com/ninject/Ninject)

## Transpiler
In most cases, when project grows and have tons of code lines, compilation and transpiling becomes very slow and provide a bad developer experience. 
Also, other processes like tests become a problem on CI/CD pipelines with expensive times. 

In this case, we are evaluate some tools to improve this experience and decrease time of execution.

### @SWC
We used to run and compile. Your behaviour is correct and works fine. It is faster than `tsc`. 
To configure this transpiler is very tedious, we need some files more that are very similar to tsconfig.json. So, we would need to increase efforts to maintain a couple configuration files.

Also, when use it to create bundle with **spack** it not works. 
Maybe Eslint it’s better solution by the moment.

### Esbuild
This tool is key to build monorepo. It allows to transform typescript to js faster than tsc and create a complete small bundle that contains all code.
On this way we can forget to copy node_modules folder on Docker image or target server to deploy system.

Also, Esbuild has some tools to jest (esbuild-jest, to transpile code and test quickly) and runner to develop (`tsx`).
This tools provides a better developer experience, and contribute to generate builds smaller than without tool.

