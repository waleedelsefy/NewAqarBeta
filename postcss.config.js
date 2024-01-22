const purgecss = require('@fullhuman/postcss-purgecss');
const postcssMinify = require('postcss-minify');

module.exports = {
    plugins: [
        require('postcss-import'),
        require('autoprefixer'),
        purgecss({
            content: ['./**/*.php', './**/*.js'],
            defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
            // Other options specific to your theme
        }),
        postcssMinify(),
    ],
};
