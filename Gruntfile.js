module.exports = function(grunt) {
    // Load grunt task automatically
    require('time-grunt')(grunt);
    require('load-grunt-config')(grunt, {
        data: {
            basePaths: {
                providerext: 'extensions/lra_sitepackage/',
                scss: 'src/Scss/',
                css: 'dist/Css/',
                js: 'dist/JavaScript/',
                jsVendors: 'src/Private/JavaScript/vendors/',
                jsPrivate: 'src/JavaScript/',
                html: 'dist/Html/',
                nunjucks: 'src/Nunjucks/',
            }
        }
    });
};
