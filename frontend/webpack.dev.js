const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        open: true,
        overlay: true, // shows errors in browser
        watchContentBase: true,
        publicPath: '/',
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        hot: true,
        host: 'localhost',
        port: 8080

    },
});