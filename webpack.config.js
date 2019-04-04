const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
 
module.exports = {
    mode: 'development',
    entry: {
	main: './src/index.js',
    },
    output: {
	filename: '[name].js',
	path: __dirname + '/dist'
    },
    module: {
        rules: [
	    {
		test: /\.wasm$/,
		type: "javascript/auto",
		loader: "file-loader"
	    },
	    {
		test: /\.jsx?$/,
		exclude: /node_modules/,
		use: [
		    {
			loader: 'babel-loader',
			options: {
			    presets: ["@babel/preset-react"],
			    plugins: ["@babel/plugin-syntax-dynamic-import"],
			}
		    }
		],
	    },
            {
                test: /\.css$/,
		sideEffects: true,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
	    {
		test: /\.scss$/,
		use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
		]
            },
	    {
		test: /\.(xml|png|svg|jpg|gif|eot|woff2?|ttf)$/,
		use: [{
		    loader: "file-loader",
		    options: {}}]
	    }
        ]
    },
    plugins: [
	      new HtmlWebpackPlugin({filename: path.resolve(__dirname, "dist/index.html"),
				     template: path.resolve(__dirname, "src/template.html"),
/*				     inject: false,*/
				     /*chunks: ['main']*/})],
    devtool: 'inline-source-map',
    devServer: {
	disableHostCheck: true,
	compress: true,
/*	public: 'https://app1.heptet.us:443', */
	host: '0.0.0.0',
	contentBase: path.resolve(__dirname, "public"),
	historyApiFallback: true,
    }
};
