const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const { NodeAsyncHttpRuntime } = require('@telenko/node-mf');
const path = require('path');
const deps = require('./package.json').dependencies;

const getConfig = (target) => ({
  entry: './src/index.ts',
  target: target === 'web' ? 'web' : false,
  mode: 'production',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist', target),
    publicPath:
      process.env.BUILD_ENV === 'production'
        ? `https://jrlayout.vercel.app/${target}/`
        : `http://localhost:3020/${target}/`,
    clean: true,
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3020,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'jrlayout',
      library: { type: 'var', name: 'jrlayout' },
      filename: 'remoteEntry.js',
      exposes: {
        './components/footer': './src/components/footer',
        './components/header': './src/components/header',
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          eager: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          eager: true,
          requiredVersion: deps['react-dom'],
        },
      },
    }),
    ...(target === 'web'
      ? [
          new HtmlWebpackPlugin({
            template: './public/index.html',
          }),
        ]
      : [new NodeAsyncHttpRuntime()]),
  ],
});

module.exports = [getConfig('web'), getConfig('node')];
