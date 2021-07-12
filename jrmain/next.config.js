const { NodeModuleFederation } = require('@telenko/node-mf');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  webpack(config, options) {
    const { isServer } = options;
    const isProduction = process.env.BUILD_ENV === 'production';

    const mfConfig = {
      remoteType: 'var',
      remotes: {
        jrcommon: 'jrcommon',
        jrlayout: isServer
          ? isProduction
            ? 'jrlayout@https://jrlayout.vercel.app/node/remoteEntry.js'
            : 'jrlayout@http://localhost:3020/node/remoteEntry.js'
          : 'jrlayout',
        jrprofile: isServer
          ? isProduction
            ? 'jrprofile@https://jrprofile.vercel.app/node/remoteEntry.js'
            : 'jrprofile@http://localhost:3030/node/remoteEntry.js'
          : 'jrprofile',
      },
      shared: {
        react: {
          eager: true,
          singleton: true,
          requiredVersion: false,
        },
        'react-dom': {
          eager: true,
          singleton: true,
          requiredVersion: false,
        },
      },
    };

    config.plugins.push(
      new (isServer ? NodeModuleFederation : ModuleFederationPlugin)(mfConfig),
    );

    config.experiments = { topLevelAwait: true };

    return config;
  },
};
