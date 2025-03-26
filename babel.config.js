module.exports = function (api) {
  api.cache(false);
  const isDevMode = process.env.NODE_ENV === 'development';

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      require.resolve('expo-router/babel'),
      '@babel/plugin-transform-export-namespace-from',
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          root: ['.'],
          alias: {
            '@': './src',
            'app': './app',
            'assets': './assets'
          },
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.png', '.jpg']
        }
      ]
    ]
  };
};
