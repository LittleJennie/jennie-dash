const path = require('path');

module.exports = {
  entry: ['babel-polyfill', path.resolve(__dirname, 'client')],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.(js||jsx)/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.css/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              import: true,
              modules: {
                localIdentName: '[local]_[hash:base64:5]',
              },
            },
          },
        ],
      },
    ],
  },
  mode: 'production',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};