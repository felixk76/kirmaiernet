var sass = require('node-sass');
module.exports = {
    options: {
        implementation: sass,
        includePaths: ['htdocs/typo3conf/conf.d']
    },
    build: {
        files: [
            {
                expand: true,
                cwd: '<%= basePaths.scss %>',
                src: ['*.scss', '!backend-skin.scss', '!style.scss'],
                dest: '<%= basePaths.css %>',
                ext: '.css'
            },
            { '<%= basePaths.backendCss %>backend-skin.css': '<%= basePaths.scss %>backend-skin.scss' },
            { '<%= basePaths.css %>style-full.css': '<%= basePaths.scss %>style.scss' }
        ],

        options: {
            sourceMap: false
        }
    },

    compile: {
        files: [
            {
                expand: true,
                cwd: '<%= basePaths.scss %>',
                src: ['*.scss', '!backend - skin.scss', '!style.scss'],
                dest: '<%= basePaths.css %>',
                ext: '.css'
            },
            { '<%= basePaths.backendCss %>backend-skin.css': '<%= basePaths.scss %>backend-skin.scss' },
            { '<%= basePaths.css %>style-full.css': '<%= basePaths.scss %>style.scss' }
        ],
        options: {
            sourceMap: true
        }
    }
};
