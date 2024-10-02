'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "37375604d3d355bacbf74d8406d3375e",
"assets/AssetManifest.bin.json": "b523c9f114f4ab6e7aaec47b4b59ca2a",
"assets/AssetManifest.json": "37939a34e392f66be3922654837f8af7",
"assets/assets/images/test.png": "cb4f36468ba2eb435f6e891ed3156600",
"assets/assets/lottie/ai.json": "2dbb8becdab761137771650f03eb0ff2",
"assets/assets/lottie/loading.json": "62dddaecbd819bce0e2d594a0b613c0f",
"assets/assets/lottie/streaming.json": "5b939dd90fc6e4bd97171024740d1716",
"assets/assets/rive/waves_assistant.riv": "dbf2310005110d8f1b488f9dbc7228c3",
"assets/assets/svg/add_page.svg": "cc95e28a8ca48f9131a7711a8297676c",
"assets/assets/svg/arrow.svg": "2a61e8280bfbdcc3b73a3dadfcbfc721",
"assets/assets/svg/chat.svg": "f9de21fce1fe4b59751095900c78f1ce",
"assets/assets/svg/circle.svg": "f36acc26b85d35c0cd7cca7e33c0fef3",
"assets/assets/svg/contract.svg": "ff293f3a4f079fe2125795ceff3709a3",
"assets/assets/svg/download.svg": "b77abb75a93a46a4c5fb32617304fdee",
"assets/assets/svg/eraser.svg": "690b91bf68816cec08be61daa64bb29d",
"assets/assets/svg/expand.svg": "d3f09ff6ac3acc6060169b2b16679106",
"assets/assets/svg/export_png.svg": "6575cf0e300cee4ef6774bdefd06875f",
"assets/assets/svg/file.svg": "e8b152d099afd2b1d9e714d038f31c08",
"assets/assets/svg/hand.svg": "86f29ef230130077da88407f28a14c8c",
"assets/assets/svg/image.svg": "0e2dae58ae86fb1246e6a49f2c34faca",
"assets/assets/svg/line.svg": "bc471f810140db74464e65a731bab5cd",
"assets/assets/svg/logo.svg": "b1df5f03498d0bddb1afd418bda3afeb",
"assets/assets/svg/logo_icon.svg": "0b4bbb999ed97901de1b549c27d30e5e",
"assets/assets/svg/menu.svg": "277d1f43246bd191eb721764addd9e83",
"assets/assets/svg/mic.svg": "b245aacd6e39e959fac19c7431d81e13",
"assets/assets/svg/pencil.svg": "faaeab0e0c20c31a9776c6524de1bf93",
"assets/assets/svg/rectangle.svg": "987106ed78b6c92edb7247aaed0d5e10",
"assets/assets/svg/redo.svg": "a68cf676c2cd7f0c7197cd06c1a57816",
"assets/assets/svg/reset.svg": "0ca26a92d27f40cbaf445cbe6b714d7c",
"assets/assets/svg/select.svg": "5ebbda2b78827c1f86c72fbc8c0515d6",
"assets/assets/svg/send.svg": "919a182409167aea8706cfc93cd7d697",
"assets/assets/svg/text.svg": "2f0060cf7aeb80f26dd5c66b2e4a317f",
"assets/assets/svg/undo.svg": "ccc2af448eb08f321d97263772b0697c",
"assets/FontManifest.json": "8608547aef56739bf86e5810b8c36283",
"assets/fonts/apple/apple_color_emoji.ttf": "7cf8ce8965e3851b2795076723c2bf90",
"assets/fonts/MaterialIcons-Regular.otf": "5316870b40da242bf2b48ae6687ed27e",
"assets/fonts/spinnaker/Spinnaker-Regular.ttf": "8dd138b325468d5d39f0e98c9e0ac809",
"assets/NOTICES": "0299745b800637f3e547d6fa7cdcf1ee",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/packages/mesh/shaders/omesh.frag": "144e525d1f9371fc96873e7cf6134ba3",
"assets/packages/record_web/assets/js/record.fixwebmduration.js": "1f0108ea80c8951ba702ced40cf8cdce",
"assets/packages/record_web/assets/js/record.worklet.js": "356bcfeddb8a625e3e2ba43ddf1cc13e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.ico": "ff6ff11917298ca91521a1d1ae183da1",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "d954ea13ce0bd1884735f40bcde4a095",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "dd9817cbc2f437f90578849b3eabdd8a",
"/": "dd9817cbc2f437f90578849b3eabdd8a",
"main.dart.js": "64966270d373ce474c05c09a65aac8b7",
"manifest.json": "a5dd5eb6a31c818bf8e6eeabaaec84fb",
"README.md": "0a43d2d40f0f9a3a40aa546f7278b5e5",
"version.json": "2ae8c8da9d36cda2a9a28e99df97307b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
