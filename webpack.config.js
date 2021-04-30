const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')


module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: "development",
    entry: "./index.js",
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        },
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin()
        ]
    },
    devServer: {
        port: 4001,
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            minify: {
                collapseWhitespace: true
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {},
                }, 'css-loader', 'sass-loader']
            }
        ]
    }
}