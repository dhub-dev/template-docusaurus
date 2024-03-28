// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Your docs with Dhub",
  tagline: "Collaborative WYSIWYG editor for your Docusarus site",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "dhub-dev", // Usually your GitHub org/user name.
  projectName: "template-docusaurus", // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/dhub-dev/template-docusaurus/tree/main",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/dhub-dev/template-docusaurus/tree/main",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "My Site",
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Docs",
          },
          { to: "/blog", label: "Blog", position: "left" },
          { to: "/about", label: "About", position: "left" },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            items: [
              {
                label: "Documentation",
                href: "/docs",
              },
              {
                label: "Blog",
                href: "/blog",
              },
              {
                label: "About",
                href: "/about",
              },
            ],
          },

          {
            title: "Dhub",
            items: [
              {
                label: "App",
                href: "https://dhub.dev",
              },
              {
                label: "Website",
                href: "https://dhub.dev",
              },
            ],
          },

          {
            title: "Support",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/6qGnyrt7xy",
              },
              {
                label: "GitHub",
                href: "https://github.com/dhub-dev",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Blog Website, Inc. Edited with Dhub on Docusaurus`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
