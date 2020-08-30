module.exports = config => {
    // Set directories to pass through to the dist folder
    config.addPassthroughCopy('./src/Images/');
    config.addPassthroughCopy('./src/Fonts/');

    const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
    config.addPlugin(eleventyNavigationPlugin);

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

