const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {

  // This option controls if and how source maps are generated.
  // https://webpack.js.org/configuration/devtool/
  devtool: 'eval-cheap-module-source-map',

  // https://webpack.js.org/concepts/entry-points/#multi-page-application
  entry: {
    index: './src/page-index/main.js',
    assortment: './src/page-assortment/main.js',
    innerassortment: './src/page-innerassortment/main.js',
    corporate: './src/page-corporate/main.js',
    pack: './src/page-pack/main.js',
    contacts: './src/page-contacts/main.js',
    ddtest: './src/page-ddtest/main.js'
  },

  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    port: 8080,
    writeToDisk: false // https://webpack.js.org/configuration/dev-server/#devserverwritetodisk-
  },
 
  // https://webpack.js.org/concepts/loaders/
  module: {
    rules: [
      { 
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.scss$/,
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader'
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [autoprefixer()]
              }
            },
            {
                loader: 'sass-loader'
            }
        ]
      },
      {
        // Load all images as base64 encoding if they are smaller than 8192 bytes
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // On development we want to see where the file is coming from, hence we preserve the [path]
              name: '[path][name].[ext]?hash=[hash:20]',
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.(ttf|woff|woff2|otf)$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    outputPath: 'fonts',
                },
            },
        ],
      },
    
      {
        test: /\.pug/,
        use: [
            {
                loader: 'html-loader',
                options: {
                    minimize: true
                }
            },
            {
                loader: 'pug-html-loader',
                options: {
                    pretty: true
                }
            }],
      }
    ]
  },

  // https://webpack.js.org/concepts/plugins/
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/page-index/tmpl.pug',
      inject: true,
      chunks: ['index'],
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/page-assortment/tmpl.pug',
      inject: true,
      chunks: ['assortment'],
      filename: 'assortment.html'
    }), 
    new HtmlWebpackPlugin({
      template: './src/page-innerassortment/tmpl.pug',
      inject: true,
      chunks: ['innerassortment'],
      filename: 'innerassortment.html'
    }),     
    new HtmlWebpackPlugin({
      template: './src/page-corporate/tmpl.pug',
      inject: true,
      chunks: ['corporate'],
      filename: 'corporate.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/page-pack/tmpl.pug',
      inject: true,
      chunks: ['pack'],
      filename: 'pack.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/page-contacts/tmpl.pug',
      inject: true,
      chunks: ['contacts'],
      filename: 'contacts.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/page-ddtest/tmpl.pug',
      inject: true,
      chunks: ['ddtest'],
      filename: 'ddtest.html'
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    })
  ]
}
