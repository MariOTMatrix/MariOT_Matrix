// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MariOT Matrix',
  tagline: 'Anchoring Data, Navigating Threats, Mooring Impacts',
  favicon: 'img/ship.png', //Tab bar image

  // Set the production url of your site here
  url: 'https://andytwl2407.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/MariOT_Matrix/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Andytwl2407', // Usually your GitHub org/user name.
  projectName: 'MariOT_Matrix', // Usually your repo name.

  onBrokenLinks: 'warn',
  trailingSlash: false,
  markdown: {
    hooks: {
        onBrokenMarkdownLinks: 'warn',   // or `throw' or `ignore'
    }
  },


  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },



  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'assets', // 资产文档的 ID
        path: 'assets_docs', // 资产文档的路径
        routeBasePath: 'assets', // 访问 /assets/
        sidebarPath: require.resolve('./sidebars-assets.js'), // 资产的侧边栏
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'detections', // New detections documentation
        path: 'detections_docs', // Path to detection docs folder
        routeBasePath: 'detections', // URL path: /detections/
        sidebarPath: require.resolve('./sidebars-detections.js'), // Sidebar config for detections
      },
    ],
  ],
  
  
  

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      // Top navigation bar

      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'MariOT Matrix',
        logo: {
          alt: 'My Site Logo',
          src: 'img/ship.png',
        },

        //Items on Navbars.

        // items: [
        //   {
        //     type: 'docSidebar',
        //     sidebarId: 'tutorialSidebar',
        //     position: 'left',
        //     label: 'Tutorial',
        //   },
        //   {to: '/blog', label: 'Blog', position: 'left'},
        //   {
        //     href: 'https://github.com/facebook/docusaurus',
        //     label: 'GitHub',
        //     position: 'right',
        //   },
        // ],
      },

      // Top navigation bar




      footer: {
        style: 'dark',
        copyright: `<strong>For More Information:</strong> T. W. L. Andy, A. Yousaf, L. Feng and J. Zhou, "<em>MariOT Matrix for Maritime Cybersecurity</em>," Journal of Transportation Security, Vol. 19, 33, 2026.<br/> DOI: <a href="https://doi.org/10.1007/s12198-026-00354-x">https://doi.org/10.1007/s12198-026-00354-x</a> <br/>Copyright © ${new Date().getFullYear()} MariOT Matrix by iTrust, SUTD.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
