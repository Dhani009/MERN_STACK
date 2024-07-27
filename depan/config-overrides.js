const { override, addWebpackAlias } = require('customize-cra');

const devServerConfig = () => config => {
  return {
    ...config,
    allowedHosts: [
      'localhost', // atau nama host lain yang sesuai
    ],
  };
};

module.exports = {
  webpack: override(
    // Konfigurasi webpack lainnya...
    addWebpackAlias({
      // Contoh: '@': path.resolve(__dirname, 'src')
    })
  ),
  devServer: (configFunction) => (proxy, allowedHost) => {
    const config = configFunction(proxy, allowedHost);
    return {
      ...config,
      allowedHosts: [
        'localhost', // atau nama host lain yang sesuai
      ],
    };
  }
};
