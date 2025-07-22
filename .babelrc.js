const { NODE_ENV } = process.env

module.exports = {
  presets: [
    [
      '@babel/env',
      {
        modules: NODE_ENV === 'test' ? 'auto' : false,
      },
    ],
    '@babel/react',
    '@babel/preset-flow',
  ],
  comments: true,
  plugins: [
    '@babel/transform-runtime',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-class-properties',
  ],
}
