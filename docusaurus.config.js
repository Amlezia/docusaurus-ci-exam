export default {
  baseUrl: '/',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // Docs folder path relative to website dir.
          path: 'src/pages',
          // Sidebars file relative to website dir.
          sidebarPath: require.resolve('sidebars.json'),
        },
      },
    ],
  ],
};