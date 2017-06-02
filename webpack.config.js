const webpack = require('webpack');
const path = require('path');

const testConfig = {
    context: path.resolve(__dirname, 'src'),
    entry: './app.js',
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            riot: 'riot',
            route: 'riot-route',
            $: 'jquery',
            jQuery: 'jquery'
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: path.resolve(__dirname, 'js'),
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['es2015', {modules: false}]
                    ]
                }
            }]
        },{
            enforce: "pre",
            test: /\.tag$/,
            use:[{
                loader: 'riotjs-loader',
                options: {
                    plugins: new webpack.ProvidePlugin({
                        riot: 'riot'
                    })
                }
            }]
        }, {

        }]
    }
};


module.exports = testConfig;