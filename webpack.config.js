var path = require('path')
var webpack = require('webpack')

module.exports = {
    devtool: 'source-map',
    context: path.join(__dirname, 'src'),
    entry: [
        './App/App.jsx'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'index.js',
        publicPath: '/static/'
    },
    resolve: {
        root: path.resolve(__dirname),
        alias: {
            src: 'src'
        },
        extensions: ['', 'jsx', '.js']
    },
    devServer: {
        host: 'localhost',
        port: 9090,
        contentBase: path.join(__dirname, 'static'),
        proxy: [{
            path: '/api/',
            target: 'http://localhost:9091'
        }],
        historyApiFallback: true
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                loaders: ['babel'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    }
}
