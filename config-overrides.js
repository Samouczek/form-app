const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
	alias({
		'@assets': 'src/assets',
		'@constants': 'src/constants',
		'@shared-styles': 'src/shared-styles',
		'@components': 'src/components',
		'@typings': 'src/typings',
		'@context': 'src/context',
		'@queries': 'src/queries',
	})(config);

	return config;
};
