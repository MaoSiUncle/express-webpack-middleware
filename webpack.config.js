/**
 * Created by yunlong on 16/9/28.
 */
var webpack = require('webpack');
var path=require('path');
module.exports = {
    entry: {

        app:['./app/app.js']
    },
    output: {
        path: __dirname+'/build',
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loaders:['babel?cacheDirectory='+__dirname+'/babelCatche'],
                include: path.resolve(__dirname, 'app'),
                exclude:/node_modules/
            }
        ]
    },
    plugins:[]
};
