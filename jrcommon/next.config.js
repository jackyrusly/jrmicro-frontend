const { withFederatedSidecar } = require('@module-federation/nextjs-mf');

module.exports = withFederatedSidecar({
  name: 'jrcommon',
  filename: 'static/chunks/remoteEntry.js',
  exposes: {
    './components/card': './src/components/card',
  },
  shared: {
    react: {
      requiredVersion: false,
      singleton: true,
    },
    'react-dom': {
      eager: true,
      singleton: true,
      requiredVersion: false,
    },
  },
})({
  webpack(config, options) {
    const { isServer } = options;

    if (!isServer) {
      config.output.publicPath = 'http://localhost:3010/_next/';
    }

    return config;
  },
});
