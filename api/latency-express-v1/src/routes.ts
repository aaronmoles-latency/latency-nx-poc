import * as glob from 'glob';
import {Router} from "express";

export function registerRoutes(router: Router) {
    const routes = glob.sync(__dirname + '/**/*.route.*');
    routes.map(route => register(route, router));
}

function register(routePath: string, router: Router) {
    const route = require(routePath);
    route.register(router);
}
