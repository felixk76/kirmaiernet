module.exports = config => {
    // Set directories to pass through to the dist folder
    config.addPassthroughCopy('./src/images/');
    config.addPassthroughCopy('./src/fonts/');
    config.addPassthroughCopy('./src/slides/');
    config.addPassthroughCopy('./src/*.ico');
    config.addPassthroughCopy('./src/*.png');
    config.addPassthroughCopy('./src/browserconfig.xml');
    config.addPassthroughCopy('./src/*.webmanifest');
    config.addPassthroughCopy('./src/robots.txt');
    config.addPassthroughCopy('./src/js/vendors/**/*');
    config.addPassthroughCopy('./src/js/instantpage.min.js');


    const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
    const svgContents = require("eleventy-plugin-svg-contents");
    const pluginInlineCss = require('@navillus/eleventy-plugin-inline-css');
    const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

    config.addPlugin(eleventyNavigationPlugin);
    config.addPlugin(svgContents);
    config.addPlugin(syntaxHighlight);

    config.addCollection('footer', collection => {
        return collection
          .getFilteredByGlob('./src/footer/*.md')
    });

    config.addCollection("mainnav", collection => {
        return collection
            .getFilteredByGlob(['./src/*.md']);
    });

    config.addPairedShortcode("articlefullwidth", function(data) {
          return "<div class='article-fullwidth'>"+data+"</div>";
    });

    config.addPairedShortcode("articlecolumn", function(data, column) {
          return "<div class='article-col"+column+"'>"+data+"</div>";
    });

    config.addPlugin(pluginInlineCss, {
        input: '/dist/',
        cleanCss: true,
        purgeCss: {
          defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
          whitelist: ["[data-theme='light']","[data-theme='dark']","site-navigation-isopen"],
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

