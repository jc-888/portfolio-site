const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-tsx": hot(preferDefault(require("/Users/jaconcondes/Desktop/portfolio-site/src/templates/blog-post.tsx"))),
  "component---src-templates-blog-list-tsx": hot(preferDefault(require("/Users/jaconcondes/Desktop/portfolio-site/src/templates/blog-list.tsx"))),
  "component---src-templates-tags-tsx": hot(preferDefault(require("/Users/jaconcondes/Desktop/portfolio-site/src/templates/tags.tsx"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/jaconcondes/Desktop/portfolio-site/.cache/dev-404-page.js"))),
  "component---src-pages-404-tsx": hot(preferDefault(require("/Users/jaconcondes/Desktop/portfolio-site/src/pages/404.tsx"))),
  "component---src-pages-about-tsx": hot(preferDefault(require("/Users/jaconcondes/Desktop/portfolio-site/src/pages/about.tsx"))),
  "component---src-pages-contact-tsx": hot(preferDefault(require("/Users/jaconcondes/Desktop/portfolio-site/src/pages/contact.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/Users/jaconcondes/Desktop/portfolio-site/src/pages/index.tsx")))
}

