module.exports = {
    options: {
        spawn: false
    },

    configFiles: {
        files: [
            'Gruntfile.js',
            'grunt/*.js'
        ],
        options: {
            reload: true
        },
        tasks: [
            'eslint:configFiles',
            'notify:jsconfig'
        ]
    },

    scss: {
        files: [
            '<%= basePaths.scss %>**/*.scss'
        ],
        tasks: [
            'stylelint',
            'sass:compile',
            'postcss:compile',
            'notify:scss'
        ]
    },

    js: {
        files: [
            '<%= basePaths.jsPrivate %>**/*.js'
        ],
        tasks: [
            'eslint:applicationFiles',
            'uglify',
            'notify:jsapplication'
        ]
    },

    php: {
        files: [
            '<%= basePaths.providerext %>**/*.php'
        ],
        tasks: [
            'phplint',
            'phpcs',
            'notify:php'
        ]
    },

    xlf: {
        files: [
            '<%= basePaths.lang %>**/*.xlf'
        ],
        tasks: [
            'xmllint',
            'notify:xlf'
        ]
    }

};
