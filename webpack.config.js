var path =  require("path");

module.exports = {
	devtool: "source-map",
	entry: {
	  es6: './target/main.js'
	},
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: '../dist/',
		filename: '[name].bundle.js',
		chunkFilename: '[id].bundle.js'
	}
};