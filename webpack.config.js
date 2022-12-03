const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './app/index.js',
    mode: 'development',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './dist')
    },
    devServer: {
        watchFiles: ['app/*.html'],
        open: true,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './app/index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        })
    ],
    module: {
        rules: [
            // Loading SCSS/CSS
            {
              test: /\.s[ac]ss$/i,
              use: [
                // Creates `style` nodes from JS strings
                "style-loader",
                // Translates CSS into CommonJS
                "css-loader",
                // Compiles Sass to CSS
                "sass-loader",
              ],
            },
            // Loading images
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
          ],
    }
}