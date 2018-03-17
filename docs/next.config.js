module.exports = {
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.md$/,
      use: [defaultLoaders.babel, '@mdx-js/loader']
    })

    config.module.rules.push({
      test: /\.html$/,
      use: 'raw-loader'
    })

    return config
  }
}
