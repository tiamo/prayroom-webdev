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
    "revision": "26bf87adccf5e0ed998c11b8ed40f629"
  }, {
    "url": "app.html",
    "revision": "eff5ca0febf1affb3f082677c0a4613c"
  }, {
    "url": "assets/_...all_.3394cfda.js",
    "revision": null
  }, {
    "url": "assets/404.054039d1.js",
    "revision": null
  }, {
    "url": "assets/about.fd442865.js",
    "revision": null
  }, {
    "url": "assets/app.37d77b91.css",
    "revision": null
  }, {
    "url": "assets/app.4dfe1df6.js",
    "revision": null
  }, {
    "url": "assets/app.a7e7fe48.js",
    "revision": null
  }, {
    "url": "assets/markdown.6218fd70.js",
    "revision": null
  }, {
    "url": "assets/page.49a1dd07.js",
    "revision": null
  }, {
    "url": "assets/privacy.22c6311c.js",
    "revision": null
  }, {
    "url": "assets/qr.a363ae5a.js",
    "revision": null
  }, {
    "url": "assets/terms.77dcc477.js",
    "revision": null
  }, {
    "url": "assets/vendor.70fbe0f6.js",
    "revision": null
  }, {
    "url": "index.html",
    "revision": "a22d6dacb2d5f933efd88cc31dce99fd"
  }, {
    "url": "privacy.html",
    "revision": "c7e7a4232bf190934f1352f7f32c86a9"
  }, {
    "url": "qr.html",
    "revision": "51db33aefddbf9fdc677ff675f1e9e8a"
  }, {
    "url": "registerSW.js",
    "revision": "1c8f14f08e1294a88f09c58b2b6f0474"
  }, {
    "url": "terms.html",
    "revision": "6d515e626b8583b84949e0ad2990fc5f"
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
