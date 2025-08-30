module.exports = {
	reactStrictMode: false,
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},

	// webpack: (config, { isServer }) => {
	// 	if (!isServer) {
	// 		config.resolve.alias['@sentry/node'] = '@sentry/browser';
	// 	}

	// 	// Here you can modify the webpack configuration
	// 	config.plugins = config.plugins.filter(
	// 		(plugin) => plugin.constructor.name !== 'HotModuleReplacementPlugin'
	// 	);

	// 	return config;
	// },
};