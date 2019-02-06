const path = require('path');
const Webpack = require("webpack");

module.exports = env => {
    return {
        mode: env.mode,
        entry: ['./src/js/index.js', './src/sass/index.scss'],
        output: {
            filename: "bundle.js",
            path: path.resolve(__dirname, 'wwwroot/dist')
        },
        module: {
            rules: [{
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader', options: {name: 'bundle.css'}
                    },
                    {
                        loader: 'extract-loader'
                    },
                    {
                        loader: "css-loader", options: { sourceMap: true}
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            }]
        },
        plugins: [
            new Webpack.ProgressPlugin()
        ]
    };
};