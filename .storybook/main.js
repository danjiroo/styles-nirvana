const ownWebpackConfig = require('../webpack/webpack.common')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-mock/register',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config) => {
    const filteredStorybookConfig = config.module.rules.filter(
      ({ test }) => !test.test('.svg')
    )

    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          {
            test: /\.svg$/i,
            use: ['@svgr/webpack'],
          },
          ...filteredStorybookConfig,
          ...ownWebpackConfig.module.rules,
        ],
      },
    }
  },
}
