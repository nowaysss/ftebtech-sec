module.exports = {
  plugins: [
    require('autoprefixer'),
    require('cssnano')({
      preset: ['default', {
        discardComments: {
          removeAll: true,
        },
        normalizeWhitespace: true,
        colormin: true,
        convertValues: true,
        discardDuplicates: true,
        discardEmpty: true,
        mergeRules: true,
        minifyFontValues: true,
        minifySelectors: true,
        reduceIdents: false,
        svgo: true,
      }],
    }),
    require('postcss-combine-duplicated-selectors'),
    require('postcss-sort-media-queries'),
  ],
};