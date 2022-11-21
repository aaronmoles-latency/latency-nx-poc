#!/usr/bin/env node

const {esbuildPluginDecorator} = require("esbuild-plugin-decorator");

require("esbuild")
    .build({
        entryPoints: ['./src/index.ts'],
        bundle: true,
        outfile: './dist/index.js',
        tsconfig: './tsconfig.json',
        platform: 'node',
        minify: true,
        plugins: [
            esbuildPluginDecorator({
                tsconfigPath: 'tsconfig.json',
            }),
        ],
    })
    .then(result => console.log(result))
    .catch(() => process.exit(1));
