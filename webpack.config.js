const path = require('path');
const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const frontConfig = {
    mode:'development',
    target: "web",
    entry: {
      app: [ 'babel-polyfill', "./src/index.js"]
    },
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: "bundle-front.js",
    },

    resolve: {
        extensions: ['.js', '.jsx'],
      },

    module: {
        rules: [{
            test: /\.(js|jsx)?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            }
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          },
          {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=100000'
          },
          
        ]
      },
      devServer: {
        port: 3000,
        open: true,
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './public/index.html',
          favicon: './public/favicon.ico'
        })
    ],
    /*devServer: {
      host: '0.0.0.0', // Required for docker
      publicPath: '/assets/',
      contentBase: path.resolve(__dirname, "./views"),
      watchContentBase: true,
      compress: true,
      port: 9001
    },
    */
    devtool: 'inline-source-map',
}


const backConfig = {
    mode: 'development',

    target: "node",
    entry: {
      app: ["babel-polyfill", "./src/server/app.js"]
    },
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: "bundle-back.js"
    },
    externals: [nodeExternals()],
}

// Combined 'module.exports'
module.exports = [ frontConfig, backConfig ];