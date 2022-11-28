// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Tailwind CSS Course",
  tagline: "Learn Tailwind CSS in one month",
  url: "https://your-docusaurus-test-site.com",
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

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
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
            href: "https://bbc.co.uk",
            label: "BBC",
            position: "right",
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
            title: "Community",
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
                label: "BBC",
                href: "https://bbc.co.uk",
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
