module.exports = config => {
    // Set directories to pass through to the dist folder
    config.addPassthroughCopy('./src/Images/');
    config.addPassthroughCopy('./src/Fonts/');
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

