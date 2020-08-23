module.exports = function(grunt) {
    return {
        options: {
            configFile: '.eslintrc.json',
            fix: grunt.option('fix')
        },
        configFiles: {
            src: [
                'Gruntfile.js',
                'grunt/*.js'
            ]
        },
        applicationFiles: {
            src: [
                '<%= basePaths.jsPrivate %>**/*.js',
                '!<%= basePaths.jsPrivate %>vendors/**/*.js',
                '!<%= basePaths.js %>**/*.min.js',

            ]
        }
    };
};
