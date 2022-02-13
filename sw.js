/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-28c9dbd7'], (function (workbox) { 'use strict';

  /**
  * Welcome to your Workbox-powered service worker!
  *
  * You'll need to register this file in your web app.
  * See https://goo.gl/nhQhGp
  *
  * The rest of the code is auto-generated. Please don't update this file
  * directly; instead, make changes to your Workbox build configuration
  * and re-run your build process.
  * See https://goo.gl/2aRDsh
  */

  self.skipWaiting();
  workbox.clientsClaim();
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */

  workbox.precacheAndRoute([{
    "url": "about.html",
    "revision": "91ff5189f4766e8bcd631204aec5aa32"
  }, {
    "url": "app.html",
    "revision": "cfd8c82588c6f5f137e0d6ca9311df9e"
  }, {
    "url": "assets/_...all_.90e620f2.js",
    "revision": null
  }, {
    "url": "assets/404.b2d00db3.js",
    "revision": null
  }, {
    "url": "assets/about.6478ac76.js",
    "revision": null
  }, {
    "url": "assets/app.4089f419.css",
    "revision": null
  }, {
    "url": "assets/app.56740b54.js",
    "revision": null
  }, {
    "url": "assets/app.cb11d8cf.js",
    "revision": null
  }, {
    "url": "assets/markdown.7dd7a4da.js",
    "revision": null
  }, {
    "url": "assets/page.a32a7ad0.js",
    "revision": null
  }, {
    "url": "assets/privacy.229026f6.js",
    "revision": null
  }, {
    "url": "assets/qr.4d4f9719.js",
    "revision": null
  }, {
    "url": "assets/terms.d7ffdfbf.js",
    "revision": null
  }, {
    "url": "assets/vendor.d13a666c.js",
    "revision": null
  }, {
    "url": "index.html",
    "revision": "789a79283ce36fbf6a9d7b3ed41bbb13"
  }, {
    "url": "privacy.html",
    "revision": "e6b6a4c13704acc2c48f479f306eba6f"
  }, {
    "url": "qr.html",
    "revision": "9b0b224b7e34a44aee84b5c7db174b93"
  }, {
    "url": "registerSW.js",
    "revision": "1c8f14f08e1294a88f09c58b2b6f0474"
  }, {
    "url": "terms.html",
    "revision": "677a8f59e28e28e4859ac0204dd382f6"
  }, {
    "url": "robots.txt",
    "revision": "5e0bd1c281a62a380d7a948085bfe2d1"
  }, {
    "url": "android-chrome-192x192.png",
    "revision": "9ec046808dafc401e902b1ef6729361f"
  }, {
    "url": "android-chrome-512x512.png",
    "revision": "e64ac0b7f20e5cb06d4d01d0d732e54e"
  }, {
    "url": "manifest.webmanifest",
    "revision": "72f06f72cfb50c5e48352ad4ab2428df"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));

}));
