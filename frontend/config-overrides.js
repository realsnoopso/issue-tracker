const path = require('path');

module.exports = function override(config, env) {
	config.resolve.alias = {
		...config.resolve.alias,
		'@components': path.resolve(__dirname, 'src/components'),
		'@containers': path.resolve(__dirname, 'src/containers'),
		'@services': path.resolve(__dirname, 'src/services'),
		'@utils': path.resolve(__dirname, 'src/utils'),
		'@assets': path.resolve(__dirname, 'src/assets'),
		'@stores': path.resolve(__dirname, 'src/stores'),
		'@constants': path.resolve(__dirname, 'src/constants'),
	};

	return config;
};
