module.exports = function(grunt) {
    // Load grunt task automatically
    require('time-grunt')(grunt);
    require('load-grunt-config')(grunt, {
        data: {
            basePaths: {
                scss: 'src/Scss/',
                css: 'dist/css/',
                js: 'dist/js/',
                jsVendors: 'src/js/vendors/',
                jsPrivate: 'src/js/',
                html: 'dist/Html/',
                nunjucks: 'src/Nunjucks/',
            }
        }
    });
};
