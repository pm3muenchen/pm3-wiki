import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Wiki PM3 Indonesia - München e.V',
  tagline: 'PM3 Indonesia - München e.V',
  favicon: 'img/pm3.ico',

  // Set the production url of your site here
  url: 'https://pm3muenchen.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/pm3-wiki/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'pm3muenchen', // Usually your GitHub org/user name.
  projectName: 'pm3-wiki', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'shared',
  
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

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
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/pm3muenchen/pm3-wiki/tree/shared/docs/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Wiki PM3 Indonesia - München e.V',
      logo: {
        alt: 'Wiki PM3 Indonesia - München e.V',
        src: 'img/pm3logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://pm3muenchen.de',
          label: 'Homepage',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/share/xaPsu3ZhuW8rgUto/?mibextid=K35XfP',
            },
            {
              label: 'Instagram',
              href: 'https://instagram.com/pm3.muenchen/',
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/@pengajianpm3e.vmuenchen171',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Website',
              to: 'https://www.pm3muenchen.de',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/pm3muenchen',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PM3 Indonesia - München e.V. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
