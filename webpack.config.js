const webpack = require('webpack');
const path = require("path");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleTracker = require('webpack-bundle-tracker');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const glob = require('glob-all');
const PurifyCSSPlugin = require('purifycss-webpack');

module.exports = {
    entry: {
        home: './templates/js/home.js',
        result: './templates/js/result.js',
        banner: './templates/js/banner.js',
        404: './templates/js/404.js',
    },
    output: {path: __dirname + '/templates/bundle', filename: 'js/[name].js', publicPath: '/templates/bundle/'},
    module: {
        loaders: [
            {test: /\.css$/, loader: ExtractTextPlugin.extract({use: ['css-loader', 'postcss-loader'], publicPath: '../'})},
            //{test: /\.(eot|svg|ttf|woff|woff2)$/, loader: 'file-loader?name=assets/fonts/[name].[ext]'},
            {test: /\.(jpe?g|png|gif|svg)$/i, loader: ["file-loader?name=../../[path][name].[ext]", 'image-webpack-loader']},
            {test: /\.hbs$/, loader: 'handlebars-loader', options:{helperDirs: path.resolve(__dirname, "./templates/handlebars/helpers")}}
        ]
    },
    plugins: [
        new BundleTracker({filename: './webpack-stats.json'}),
        new ExtractTextPlugin('css/[name].css'),
        new webpack.optimize.CommonsChunkPlugin('vendors'),
        //new UglifyJSPlugin({mangle: {except: ['$super', '$', 'exports', 'require']}, extractComments: true}),

        //Purify CSS
        //new PurifyCSSPlugin({paths: glob.sync([path.join(__dirname, 'templates/*.html'), path.join(__dirname, 'templates/partials/*.html')]), minimize: true,
        //    purifyOptions: {whitelist: []}
        //}),

        //HTML
        new HtmlWebpackPlugin({filename: '404.html', chunks: ['vendors','error'], minify: {collapseWhitespace: true}, hash: true, template: './templates/404.html'}),
        //new HtmlWebpackPlugin({filename: '500.html', chunks: ['vendors','error'], minify: {collapseWhitespace: true}, hash: true, template: './templates/500.html'}),
        new HtmlWebpackPlugin({filename: 'home.html', chunks: ['vendors','home'], minify: {collapseWhitespace: true}, hash: true, template: './templates/home.html'}),
        new HtmlWebpackPlugin({filename: 'result.html', chunks: ['vendors','result'], minify: {collapseWhitespace: true}, hash: true, template: './templates/result.html'}),
        new HtmlWebpackPlugin({filename: 'banner.html', chunks: ['vendors','banner'], minify: {collapseWhitespace: true}, hash: true, template: './templates/banner.html'}),
    ],
    resolve: {
        alias: {
           handlebars: 'handlebars/dist/handlebars.min.js'
        }
    }
};