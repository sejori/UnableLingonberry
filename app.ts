import * as Peko from "https://deno.land/x/peko@v0.2.0/mod.ts"

import { renderToString } from "https://npm.reversehttp.com/preact,preact/hooks,htm/preact,preact-render-to-string"

import Navbar from "./src/src.js"
import NavbarRaw from "./src/src-raw.js"

import htmlTemplate from "./template.ts"

// create a response cache for our custom SSR 
// (note: it will use config.defaultCacheLifetime as none provided)
const memoizeHandler = Peko.createResponseCache()

const decoder = new TextDecoder();

// Custom route using ResponseCache & our own ssr logic  - returns JSON data for component instead of HTML
Peko.addRoute({
  route: "/navbar-data",
  method: "GET",
  // memoize our custom handler so responses are cached until lifetime expires
  // and not re-rendered for every request
  handler: memoizeHandler(async (_request: Request) => {
    // get CSS and JS strings
    const jsUInt8Array = await Deno.readFile(new URL("./src/js-package.js", import.meta.url))
    const jsString = decoder.decode(jsUInt8Array)

    const cssUInt8Array = await Deno.readFile(new URL("./src/css-package.css", import.meta.url));
    const cssString = decoder.decode(cssUInt8Array)

    // here we manually render our app to HTML
    const appHTML = renderToString(Navbar({ server_time: `${Date.now()}` }), null, null)
    const HTML = htmlTemplate({
      appHTML,
      title: `<title>Peko</title>`,
      modulepreload: `<script modulepreload="true" type="module" src="/src.js"></script>`,
      hydrationScript: `<script type="module">
          import { hydrate } from "https://npm.reversehttp.com/preact,preact/hooks,htm/preact,preact-render-to-string";
          import App from "/src.js";
          hydrate(App({ server_time: ${Date.now()} } }), document.getElementById("root"))
      </script>`
    })

    // now we take our HTML & JS and add into our JSON data along with an example CSS string
    const customBody = {
      html: HTML,
      css: cssString,
      javascript: jsString
    }

    // send our JSON as the response :D
    return new Response(JSON.stringify(customBody), {
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
  })
})

// Custom src-raw.js route
Peko.addRoute({
  route: "/navbar-raw",
  method: "GET",
  // memoize our custom handler so responses are cached until lifetime expires
  // and not re-rendered for every request
  handler: memoizeHandler(async (_request: Request) => {
    // get CSS and JS strings
    const ExecUInt8Array = await Deno.readFile(new URL("./src/components/Exec.html", import.meta.url))
    const ExecString = decoder.decode(ExecUInt8Array)

    const StylesUInt8Array = await Deno.readFile(new URL("./src/components/Styles.html", import.meta.url))
    const StylesString = decoder.decode(StylesUInt8Array)

    // here we manually render our app to HTML
    const appHTML = renderToString(NavbarRaw({ server_time: `${Date.now()}` }), null, null)
    const HTML = htmlTemplate({
      appHTML,
      title: `<title>Peko</title>`,
      modulepreload: `<script modulepreload="true" type="module" src="/src-raw.js"></script>`,
      ExecString,
      StylesString,
      hydrationScript: `<script type="module">
          import { hydrate } from "https://npm.reversehttp.com/preact,preact/hooks,htm/preact,preact-render-to-string";
          import App from "/src-raw.js";
          hydrate(App(), document.getElementById("root"))
      </script>`
    })

    // send our JSON as the response :D
    return new Response(JSON.stringify({ html: HTML }), {
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
  })
})

// Static source routes for client-side loading
Peko.addStaticRoute({
  route: "/src.js",
  fileURL: new URL(`./src/src.js`, import.meta.url),
  contentType: "application/javascript",
});
Peko.addStaticRoute({
  route: "/src-raw.js",
  fileURL: new URL(`./src.src.js`, import.meta.url),
  contentType: "application/javascript",
});
Peko.addStaticRoute({
  route: "/Navbar.js",
  fileURL: new URL(`./src/components/Navbar.js`, import.meta.url),
  contentType: "application/javascript",
});
Peko.addStaticRoute({
  route: "/NavbarRaw.js",
  fileURL: new URL(`./src/components/NavbarRaw.js`, import.meta.url),
  contentType: "application/javascript",
});

// Start Peko server :)
Peko.start()