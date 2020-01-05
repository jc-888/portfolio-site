require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `My Personal Portfolio and Blog`,
    author: `Jacon J Condes`,
    about: `My friends and colleagues call me Jake. I’m a Full-Stack Web & Mobile Developer from the Greater Los Angeles Area.`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque condimentum magna quis accumsan viverra. Nullam convallis dolor id convallis tempor. Vestibulum eu ante fringilla, ultricies sem varius, lacinia purus. Praesent sollicitudin leo in libero maximus, at varius lacus pretium. Sed fringilla iaculis egestas. Praesent consectetur sit amet felis sit amet scelerisque. Etiam at tincidunt lorem. Nulla tincidunt urna sit amet quam posuere egestas. In nec ornare lectus. In fermentum volutpat velit. Fusce ullamcorper lorem et sollicitudin tempor. Aliquam vitae nunc ut lectus hendrerit consequat vel nec enim.`,
    siteUrl: `https://google.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        minify: false, // Breaks styles if not set to false
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              linkImagesToOriginal: true,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`,
            },
          },
          {
            resolve: `gatsby-remark-mermaid`,
          },
          {
            resolve: `gatsby-remark-prismjs`,
          },
          {
            resolve: `gatsby-remark-prismjs`,
          },

          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
          {
            resolve: `gatsby-remark-smartypants`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-transformer-sharp`,
    },
    {
      resolve: `gatsby-plugin-sharp`,
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `219089578`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Personal Portfolio and Blog`,
        short_name: `Jacon J Condes`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#1D95D1`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
    },
    {
      resolve: `gatsby-plugin-react-helmet`,
    },
    {
      resolve: `gatsby-plugin-typescript`,
    },
    {
      resolve: `gatsby-plugin-lodash`,
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            variants: [`300`, `400`, `500`, `600`, `700`],
          },
          {
            family: `Fira Sans`,
            variants: [`100`, `300`, `400`, `500`, `600`, `700`],
          },
        ],
      },
    },
  ],
};
