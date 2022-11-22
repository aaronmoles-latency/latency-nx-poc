#!/usr/bin/env node

const {esbuildPluginDecorator} = require("esbuild-plugin-decorator");

require("esbuild")
    .build({
        entryPoints: ['./src/main.ts'],
        bundle: true,
        outfile: './dist/main.js',
        tsconfig: './tsconfig.build.json',
        platform: 'node',
        minify: true,
        external: [
            '@nestjs/websockets/socket-module',
            "@nestjs/microservices/microservices-module",
            'class-transformer/storage',
            '@nestjs/microservices',
            'cache-manager',
        ],
        plugins: [
            esbuildPluginDecorator({
                tsconfigPath: 'tsconfig.build.json',
            }),
        ],
    })
    .then(result => console.log(result))
    .catch(() => process.exit(1));
