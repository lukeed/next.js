module.exports = {
  webpack: (cfg, { dev }) => {
		cfg.resolve.alias = {
			'react': 'preact-compat',
			'react-dom': 'preact-compat'
		}
    return cfg
  }
}