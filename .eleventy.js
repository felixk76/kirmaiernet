module.exports = config => {
    // Set directories to pass through to the dist folder
    config.addPassthroughCopy('./src/Images/');
    config.addPassthroughCopy('./src/Fonts/');
    config.addPassthroughCopy('./src/*.ico');
    config.addPassthroughCopy('./src/*.png');
    config.addPassthroughCopy('./src/browserconfig.xml');

    const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
    const svgContents = require("eleventy-plugin-svg-contents");
    config.addPlugin(eleventyNavigationPlugin);
    config.addPlugin(svgContents);

    config.addCollection('footer', collection => {
        return collection
          .getFilteredByGlob('./src/footer/*.md')
      });

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

