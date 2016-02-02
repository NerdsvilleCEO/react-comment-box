var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: {
		commentBox: './src/CommentBox.jsx'
	},
    output: { path: __dirname + "/build", filename: '[name].bundle.js' },
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	},
};
