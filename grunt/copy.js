module.exports = {
    vendorJS: {
        nonull: true,
        flatten: true,
        filter: 'isFile',
        expand: true,
        cwd: 'node_modules/',
        src: [
            'picturefill/dist/picturefill.js',
            'lazysizes/lazysizes.js',
            'fg-loadcss/dist/cssrelpreload.js',
            'intersection-observer/intersection-observer.js',
            'instant.page/instantpage.js'

        ],
        dest: '<%= basePaths.jsVendors %>'
    }
};
