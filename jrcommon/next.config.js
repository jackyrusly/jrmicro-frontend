const { withFederatedSidecar } = require('@module-federation/nextjs-mf');

module.exports = withFederatedSidecar({
  name: 'jrcommon',
  filename: 'static/chunks/remoteEntry.js',
  exposes: {
    './components/card': './src/components/card',
    './components/header': './src/components/header',
    './components/footer': './src/components/footer',
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
      config.output.publicPath =
        process.env.BUILD_ENV === 'production'
          ? 'https://jrcommon.vercel.app/_next/'
          : 'http://localhost:3010/_next/';
    }

    return config;
  },
});
