module.exports = {
    allScss: {
        options: {
            configFile: '.stylelintrc.json'
        },
        src: [
            '<%= basePaths.scss %>**/*.scss',
            '!<%= basePaths.scss %>Vendors/**/*.scss',
        ]
    }
};
