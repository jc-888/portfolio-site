// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-tsx": () => import("/Users/jaconcondes/Desktop/portfolio-site/src/templates/blog-post.tsx" /* webpackChunkName: "component---src-templates-blog-post-tsx" */),
  "component---src-templates-blog-list-tsx": () => import("/Users/jaconcondes/Desktop/portfolio-site/src/templates/blog-list.tsx" /* webpackChunkName: "component---src-templates-blog-list-tsx" */),
  "component---src-templates-tags-tsx": () => import("/Users/jaconcondes/Desktop/portfolio-site/src/templates/tags.tsx" /* webpackChunkName: "component---src-templates-tags-tsx" */),
  "component---cache-dev-404-page-js": () => import("/Users/jaconcondes/Desktop/portfolio-site/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-tsx": () => import("/Users/jaconcondes/Desktop/portfolio-site/src/pages/404.tsx" /* webpackChunkName: "component---src-pages-404-tsx" */),
  "component---src-pages-about-tsx": () => import("/Users/jaconcondes/Desktop/portfolio-site/src/pages/about.tsx" /* webpackChunkName: "component---src-pages-about-tsx" */),
  "component---src-pages-contact-tsx": () => import("/Users/jaconcondes/Desktop/portfolio-site/src/pages/contact.tsx" /* webpackChunkName: "component---src-pages-contact-tsx" */),
  "component---src-pages-index-tsx": () => import("/Users/jaconcondes/Desktop/portfolio-site/src/pages/index.tsx" /* webpackChunkName: "component---src-pages-index-tsx" */),
  "component---src-pages-portfolio-tsx": () => import("/Users/jaconcondes/Desktop/portfolio-site/src/pages/portfolio.tsx" /* webpackChunkName: "component---src-pages-portfolio-tsx" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/jaconcondes/Desktop/portfolio-site/.cache/data.json")

