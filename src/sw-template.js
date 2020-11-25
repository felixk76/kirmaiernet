/* global workbox */
import { matchPrecache, precacheAndRoute } from 'workbox-precaching';
import { registerRoute, setDefaultHandler, setCatchHandler } from 'workbox-routing';
import { CacheFirst, NetworkFirst, StaleWhileRevalidate } from 'workbox-strategies';

importScripts('js/vendors/workbox-v5.1.4/workbox-sw.js');

self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

self.skipWaiting();

// eslint-disable-next-line quotes, key-spacing, comma-spacing, object-curly-spacing
self.__precacheManifest = self.__WB_MANIFEST.concat(self.__precacheManifest || []);
precacheAndRoute(self.__precacheManifest);

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

// Serve all html files with Networkfirst strategy
workbox.routing.registerRoute(
    /\/*\/$/,
    new workbox.strategies.NetworkFirst({
        cacheName: 'docs'
    })
);

workbox.routing.setCatchHandler(({ event }) => {
    // The FALLBACK_URL entries must be added to the cache ahead of time, either
    // via runtime or precaching. If they are precached, then call
    // `matchPrecache(FALLBACK_URL)` (from the `workbox-precaching` package)
    // to get the response from the correct cache.
    //
    // Use event, request, and url to figure out how to respond.
    // One approach would be to use request.destination, see
    // https://medium.com/dev-channel/service-worker-caching-strategies-based-on-request-types-57411dd7652c
    switch (event.request.destination) {
    case 'document':
        // If using precached URLs:
        return matchPrecache('/offline/index.html');

    case 'image':
        // If using precached URLs:
        // return matchPrecache(FALLBACK_IMAGE_URL);
        return new Response('<svg role="img" aria-labelledby="offline-title" viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"><title id="offline-title">Offline</title><path fill="rgba(145,145,145,0.5)" d="M0 0h400v225H0z" /><text fill="rgba(0,0,0,0.33)" font-family="Helvetica Neue,Arial,sans-serif" font-size="27" text-anchor="middle" x="200" y="113" dominant-baseline="central">offline</text></svg>', { headers: { 'Content-Type': 'image/svg+xml' } });

    default:
        // If we don't have a fallback, just return an error response.
        return Response.error();
    }
});
