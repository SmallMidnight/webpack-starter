const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[hash:6].js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use:['style-loader', 'css-loader']
      },
      {
        test: [/\.png$/, /\.svg$/],
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'  // ext 在打包后，会生成对应的后缀名
          }
        }
      },
/*       {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      } */
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
  ]
}