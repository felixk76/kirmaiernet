/* global workbox */
// import { precacheAndRoute } from 'workbox-precaching';

importScripts('js/vendors/workbox-v5.1.4/workbox-sw.js');

workbox.setConfig({
    modulePathPrefix: 'js/vendors/workbox-v5.1.4/'
});

self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

// workbox.precaching.precacheAndRoute([]);
self.__precacheManifest = self.__WB_MANIFEST.concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

// Serve all html files with Networkfirst strategy
workbox.routing.registerRoute(
    /\/*\/$/,
    new workbox.strategies.NetworkFirst({
        cacheName: 'docs'
    })
);

// Serve all JS files with StaleWhileRevalidate strategy
workbox.routing.registerRoute(
    /\.js$/,
    new workbox.strategies.StaleWhileRevalidate()
);

// Serve all css files with StaleWhileRevalidate strategy
workbox.routing.registerRoute(
    /\.css$/,
    new workbox.strategies.StaleWhileRevalidate()
);

// Serve all other assets with CacheFirst strategy
workbox.routing.registerRoute(
    /\.(?:png|jpg|jpeg|svg|gif|webp|ico|webmanifest|eot,ttf,woff,woff2)$/,
    new workbox.strategies.CacheFirst({
        cacheName: 'runtime'
    })
);
