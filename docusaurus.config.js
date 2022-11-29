// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Tailwind CSS Course",
  tagline: "Learn Tailwind CSS in one month",
  url: "https://tailbook-docusaurus.vercel.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "images/favicon.ico",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  //themes: ["@docusaurus/theme-search-algolia"],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: "J8EHHSBUSY",
        apiKey: "8623da203231a3714bbc435f033aa1db",
        indexName: "YOUR_INDEX_NAME",
        contextualSearch: true,
        externalUrlRegex: "external\\.com|domain\\.com",
        searchParameters: {},
        searchPagePath: "search",
      },

      navbar: {
        title: "Site",
        logo: {
          alt: "Site Logo",
          src: "images/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "preface",
            position: "left",
            label: "Book",
          },
          {
            label: "Code Editor",
            href: "https://auth-editor.vercel.app",
          },
          {
            label: "Page builder",
            href: "https://webpage-builder.netlify.app/",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Book Intro",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Resourses",
            items: [
              {
                label: "Tailwind CSS",
                href: "https://tailwindcss.com/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Code Editor",
                href: "https://auth-editor.vercel.app",
              },
              {
                label: "Page builder",
                href: "https://webpage-builder.netlify.app/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Company`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
