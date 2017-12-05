const webpack = require('webpack');

module.exports = {

    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },

    devtool:'eval-source-map',

    devServer: {
        contentBase: "./public",
        historyApiFallback: true,
        inline: true,
        hot: true
    },

    module: {
        rules: [
            {
                test:/(\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },{
                        loader: "css-loader"
                    }
                ]
            }
        ]
    },

    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究！'),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJSPlugin(),
    ],
};