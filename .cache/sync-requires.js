// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/ameen/Documents/workspace/igniteworx/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/Users/ameen/Documents/workspace/igniteworx/src/templates/blog-post.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/ameen/Documents/workspace/igniteworx/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/ameen/Documents/workspace/igniteworx/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/ameen/Documents/workspace/igniteworx/src/pages/about.js")),
  "component---src-pages-blog-js": preferDefault(require("/Users/ameen/Documents/workspace/igniteworx/src/pages/blog.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/ameen/Documents/workspace/igniteworx/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/ameen/Documents/workspace/igniteworx/src/pages/page-2.js")),
  "component---src-pages-services-js": preferDefault(require("/Users/ameen/Documents/workspace/igniteworx/src/pages/services.js"))
}

exports.json = {
  "layout-index.json": require("/Users/ameen/Documents/workspace/igniteworx/.cache/json/layout-index.json"),
  "post-two.json": require("/Users/ameen/Documents/workspace/igniteworx/.cache/json/post-two.json"),
  "post-one.json": require("/Users/ameen/Documents/workspace/igniteworx/.cache/json/post-one.json"),
  "post-three.json": require("/Users/ameen/Documents/workspace/igniteworx/.cache/json/post-three.json"),
  "dev-404-page.json": require("/Users/ameen/Documents/workspace/igniteworx/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/ameen/Documents/workspace/igniteworx/.cache/json/404.json"),
  "about.json": require("/Users/ameen/Documents/workspace/igniteworx/.cache/json/about.json"),
  "blog.json": require("/Users/ameen/Documents/workspace/igniteworx/.cache/json/blog.json"),
  "index.json": require("/Users/ameen/Documents/workspace/igniteworx/.cache/json/index.json"),
  "page-2.json": require("/Users/ameen/Documents/workspace/igniteworx/.cache/json/page-2.json"),
  "services.json": require("/Users/ameen/Documents/workspace/igniteworx/.cache/json/services.json"),
  "404-html.json": require("/Users/ameen/Documents/workspace/igniteworx/.cache/json/404-html.json")
}