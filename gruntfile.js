module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            dist: {
                files: {
                    'lib/jsqrcode-combined.min.js': [
                        "src/jsqrcode/src/grid.js",
                        "src/jsqrcode/src/version.js",
                        "src/jsqrcode/src/detector.js",
                        "src/jsqrcode/src/formatinf.js",
                        "src/jsqrcode/src/errorlevel.js",
                        "src/jsqrcode/src/bitmat.js",
                        "src/jsqrcode/src/datablock.js",
                        "src/jsqrcode/src/bmparser.js",
                        "src/jsqrcode/src/datamask.js",
                        "src/jsqrcode/src/rsdecoder.js",
                        "src/jsqrcode/src/gf256poly.js",
                        "src/jsqrcode/src/gf256.js",
                        "src/jsqrcode/src/decoder.js",
                        "src/jsqrcode/src/QRCode.js",
                        "src/jsqrcode/src/findpat.js",
                        "src/jsqrcode/src/alignpat.js",
                        "src/jsqrcode/src/databr.js",
                    ],
                    'lib/html5-qrcode.min.js': ['src/html5-qrcode.js']
                },
                options: {
                    beautify: false,
                    mangle: false,
                    sourceMap: false
                }
            }
        },
        watch: {
            js: {
                files: ['src/*.js']
            }
        }
    });

    // Load the plugin that provides the tasks.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', [
        'uglify'
    ]);
};