module.exports = {
	plugins: [
		require("postcss-import"), // Allows postcss imports
		require("postcss-preset-env")({stage: 1}), 
		require("cssnano"), // Minimizes CSS code to fewer lines/ removes line breaks
		require("postcss-nested"),
		require("postcss-custom-media"),
		require("postcss-media-minmax"),
		require("autoprefixer")
	],
};