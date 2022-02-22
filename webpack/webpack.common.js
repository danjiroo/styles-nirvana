const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const webpack = require('webpack')

// Try the environment variable, otherwise use root
const ASSET_PATH = process.env.ASSET_PATH || '/dist';

console.log('@@@ webpack : __dirname', __dirname)
console.log('@@@ webpack : publicPath nirvana', path.resolve(__dirname, '..', './dist'))

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    // alias: {
    //   '@sample': './components/sample/',
    // },
    plugins: [new TsconfigPathsPlugin()],
    fallback: { crypto: false }, // crypto error in webpack
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // {
      //   test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
      //   use: ['file-loader'],
      // },
      {
        test: /\.(woff(2)?|eot|ttf|otf|css|)$/,
        type: 'asset/inline',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './dist'),
    filename: 'bundle.js',
    publicPath: ASSET_PATH,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
    new webpack.DefinePlugin({
      'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH),
    }),
  ],
  stats: 'errors-only',
}
