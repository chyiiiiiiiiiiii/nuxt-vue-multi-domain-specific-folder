// router.js

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export function createRouter(ssrContext, createDefaultRouter, routerOptions) {
  const options = routerOptions || createDefaultRouter(ssrContext).options;
  const hostname = ssrContext ? ssrContext.req.headers.host : location.host;
  return new Router({
    ...options,
    routes: fixRoutes(options.routes, hostname),
  });
}
function fixRoutes(defaultRoutes, hostname) {
  if (hostname.includes('apple')) return subdomain1Routes(defaultRoutes);
  if (hostname.includes('banana')) return subdomain2Routes(defaultRoutes);
  return nubisoftRoutes(defaultRoutes);
}
function nubisoftRoutes(defaultRoutes) {
  return defaultRoutes.filter(r => r.name !== 'apple' && 'banana');
}
function subdomain1Routes(defaultRoutes) {
  const route = defaultRoutes.find(r => r.name === 'apple');
  route.path = '/';
  return [route];
}
function subdomain2Routes(defaultRoutes) {
  const route = defaultRoutes.find(r => r.name === 'banana');
  route.path = '/';
  return [route];
}