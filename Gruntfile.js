module.exports = function (grunt)
{
    "use strict";

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-karma');

    grunt.initConfig(
        {
            pkg: grunt.file.readJSON('package.json'),
            browserify: {
                dev: {
                    files: {
                        'final-output.js': ['src/start.js']
                    },
                    options: {
                        browserifyOptions: {
                            debug: true
                        }
                    }
                }
            },
            karma:
            {
                unit:{
                    configFile:"karma.conf.js"
                }
            }
        });
};