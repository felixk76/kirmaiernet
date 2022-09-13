module.exports = {
    // brotlify assets 1-to-1 for production specifying text mode
// and using default options otherwise
    brotlijs: {
        options: {
            mode: 'brotli',
            brotli: {
                mode: 1,

            },
            pretty: true,
        },
        files: [{
            cwd: '<%= basePaths.js %>',
            expand: true,
            src: ['*.js',
                '!<%= basePaths.js %>br/'],
            dest: '<%= basePaths.js %>',
            ext: '.min.js.br'
        }]
    },
    brotlicss: {
        options: {
            mode: 'brotli',
            brotli: {
                mode: 1,

            },
            pretty: true,
        },
        files: [{
            cwd: '<%= basePaths.css %>',
            expand: true,
            src: ['*.min.css',

                '!<%= basePaths.css %>br/'],
            dest: '<%= basePaths.css %>',
            ext: '.min.css.br'
        }]
    }
};
