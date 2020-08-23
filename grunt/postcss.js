module.exports = {
    options: {
        processors: [
            require('autoprefixer')({ grid: true })
        ]
    },
    compile: {
        src: [
            '<%= basePaths.css %>*.css',
            '<%= basePaths.backendCss %>*.css'
        ],
        options: {
            map: true
        }
    },
    build: {
        src: [
            '<%= basePaths.css %>*.css',
            '<%= basePaths.backendCss %>*.css'
        ],
        options: {
            map: false
        }
    },

    critical: {
        options: {
            processors: [
                require('autoprefixer')({ grid: true }),
                require('postcss-critical-split')()
            ]
        },
        src: '<%= basePaths.css %>style-full.css',
        dest: '<%= basePaths.css %>critical.css',
    },
    uncritical: {
        options: {
            processors: [
                require('autoprefixer')({ grid: true }),
                require('postcss-critical-split')({ 'output': 'rest' })
            ]
        },
        src: '<%= basePaths.css %>style-full.css',
        dest: '<%= basePaths.css %>style.css',
    }
};

