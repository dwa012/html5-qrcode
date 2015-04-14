module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            dist: {
                files: {
                    'lib/jsqrcode-combined.min.js': ['src/jsqrcode/src/*.js'],
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