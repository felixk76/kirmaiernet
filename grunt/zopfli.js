module.exports = {
    zopfligzipjs: {
        options: {
            verbose: false,
            verbose_more: false,
            numiterations: 15
        },
        files: [{
            cwd: '<%= basePaths.js %>',
            expand: true,
            src: ['*.js',
                '!<%= basePaths.js %>br/'],
            dest: '<%= basePaths.js %>',
            ext: '.min.js.gz'
        }]
    },
    zopfligzipcss: {
        options: {
            verbose: false,
            verbose_more: false,
            numiterations: 15
        },
        files: [{
            cwd: '<%= basePaths.css %>',
            expand: true,
            src: ['*.min.css',
                '!<%= basePaths.css %>gz/'],
            dest: '<%= basePaths.css %>',
            ext: '.min.css.gz'
        }]
    }
};
