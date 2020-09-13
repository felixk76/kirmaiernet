module.exports = config => {
    // Set directories to pass through to the dist folder
    config.addPassthroughCopy('./src/Images/');
    config.addPassthroughCopy('./src/Fonts/');
    config.addPassthroughCopy('./src/*.ico');
    config.addPassthroughCopy('./src/*.png');
    config.addPassthroughCopy('./src/browserconfig.xml');
    config.addPassthroughCopy('./src/*.webmanifest');
    config.addPassthroughCopy('./src/robots.txt');

    const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
    const svgContents = require("eleventy-plugin-svg-contents");
    const pluginInlineCss = require('@navillus/eleventy-plugin-inline-css')

    config.addPlugin(eleventyNavigationPlugin);
    config.addPlugin(svgContents);

    config.addCollection('footer', collection => {
        return collection
          .getFilteredByGlob('./src/footer/*.md')
    });

    config.addPairedShortcode("articlefullwidth", function(data) {
          return "<div class='article-fullwidth'>"+data+"</div>";
    });

    config.addPairedShortcode("articlecolumn", function(data, column) {
          return "<div class='article-col"+column+"'>"+data+"</div>";
    });

    config.addPlugin(pluginInlineCss, {
        input: '/dist/', // look for all stylesheets relative to `./src/assets`
        cleanCss: true, // disable clean-css
        purgeCss: {
          defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [], // custom CSS extractor used for PurgeCSS
          whitelist: ["[data-theme='light']","[data-theme='dark']"],
          rejected: true
        }
    })

    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: 'src',
            output: 'dist'
        }
    };
};

