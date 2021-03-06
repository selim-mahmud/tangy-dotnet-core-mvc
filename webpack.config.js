const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Merge = require("webpack-merge");
const ModeConfig = (env) => require(`./build-utils/webpack/webpack.config.${env.mode}.js`)(env);

module.exports = (env = {mode: "production"}) => {
    return Merge(
        ModeConfig(env), 
        {
        entry: ['./src/js/index.js', './src/sass/index.scss'],
        output: {
            filename: "[chunkhash].js",
            path: path.resolve(__dirname, 'wwwroot/dist'),
            publicPath: '/dist/'
        },
        module: {
            rules: [
                {test: /\.scss$/, use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]},
                {test: /\.(png|svg|jpg|gif|svg|woff|woff2|eot|ttf|otf)$/, use: ["file-loader"]},
                { test: /\.html$/, use: ["html-loader"] }
        ]
        },
        plugins: [
            new HtmlWebpackPlugin(
                {
                    filename: '../../Views/Shared/_Layout.cshtml',
                    template: "./Views/Shared/_Layout_Template.cshtml",
                    cache: true,
                }
            ),
            new MiniCssExtractPlugin({
                filename: "[chunkhash].css"
              })
        ],
        stats: { colors: true }
    });
};