const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
    return {
        mode: env.mode,
        devtool: "hidden-source-map",
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                            {
                                loader: MiniCssExtractPlugin.loader,
                            },
                            {
                                loader: "css-loader", options: { sourceMap: true}
                            },
                            {
                                loader: "sass-loader"
                            }
                        ]
                }
            ]
        }
    };
};