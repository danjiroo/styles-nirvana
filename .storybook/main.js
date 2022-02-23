const ownWebpackConfig = require('../webpack/webpack.common')
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin')
const webpack = require('webpack')

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

    // styled components not included in storybook static build
    config.plugins.push(
      new webpack.DefinePlugin({
        SC_DISABLE_SPEEDY: true,
      })
    )

    return {
      ...config,
      resolve: {
        ...config.resolve ?? {},
        plugins: [
          ...(config.resolve.plugins || []),
          new TsconfigPathsPlugin(),
        ]
      },
      module: {
        ...config.module,
        rules: [
          {
            test: /\.svg$/i,
            use: ['@svgr/webpack'],
          },
          {
            test: /\.svg$/i,
            use: ['svg-inline-loader'],
          },
          ...filteredStorybookConfig,
          // ...ownWebpackConfig.module.rules,
        ],
      },
    }
  },
}
