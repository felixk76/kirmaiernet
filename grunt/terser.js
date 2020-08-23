module.exports = {
    options: {
        mangle: false
    },
    build: {
        files: [
            {
                expand: true,
                cwd: '<%= basePaths.jsVendors %>',
                src: ['*.js'],
                dest: '<%= basePaths.js %>',
                ext: '.min.js'
            },
            {
                expand: true,
                cwd: '<%= basePaths.jsPrivate %>',
                src: ['*.js'],
                dest: '<%= basePaths.js %>',
                ext: '.min.js'
            }
        ],
    }
};
