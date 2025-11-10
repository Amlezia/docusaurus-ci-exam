import sidebars from './sidebars.json' with { type: 'json' };

export default {
  title: 'Docusaurus',
  url: 'https://amlezia.github.io/docusaurus-ci-exam/',
  baseUrl: '/',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // Docs folder path relative to website dir.
          path: 'src/pages',
          // Sidebars file relative to website dir.
          sidebarPath: sidebars,        
        },
      },
    ],
  ],
};