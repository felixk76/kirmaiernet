module.exports = {
    build: {
        options: {
            sourceMap: false
        },
        files: [{
            expand: true,
            cwd: '<%= basePaths.css %>',
            src: ['*.css', '!*.min.css'],
            dest: '<%= basePaths.css %>',
            ext: '.min.css'
        }]
    },
    compile: {
        options: {
            sourceMap: true
        },
        files: [{
            expand: true,
            cwd: '<%= basePaths.css %>',
            src: ['*.css', '!*.min.css'],
            dest: '<%= basePaths.css %>',
            ext: '.min.css'
        }]
    }
};
