module.exports = {
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // Docs folder path relative to website dir.
          path: '../docs',
          // Sidebars file relative to website dir.
          sidebarPath: require.resolve('sidebars.json'),
        },
      },
    ],
  ],
};

export default {
  baseUrl: '/',
};