const { NodeModuleFederation } = require('@telenko/node-mf');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  webpack(config, options) {
    const { isServer } = options;

    const mfConfig = {
      remoteType: 'var',
      remotes: {
        jrcommon: 'jrcommon',
        jrlayout: isServer
          ? 'jrlayout@http://localhost:3020/node/remoteEntry.js'
          : 'jrlayout',
        jrprofile: isServer
          ? 'jrprofile@http://localhost:3030/node/remoteEntry.js'
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
