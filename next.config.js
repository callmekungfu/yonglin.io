const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  rewrites: async () => {
    return [
      {
        source: '/paintscal',
        destination: '/paintscal/index.html',
      },
    ];
  },
});
