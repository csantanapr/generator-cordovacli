/*global module, require */
/*jshint camelcase: false */

module.exports = function (grunt) {
    'use strict';

    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    // configurable paths
    var yeomanConfig = {
            app: 'app',
            dist: 'dist'
        };
    // Project configuration.
    grunt.initConfig({
        yeoman: yeomanConfig,
        jshint: {
            gruntfile: {
                src: 'Gruntfile.js'
            }
        },
        watch: {
            cordova: {
                files: '<%%= yeoman.app %>/www/**',
                tasks: ['build', 'emulate']
            }
        },
        cordovacli: {
            options: {
                path: '<%%= yeoman.app %>'
            },
            cordova: {
                options: {
                    command: ['create', 'platform', 'plugin'],
                    platforms: <%= platforms %>,
                    plugins:  <%= plugins %>,
                    id: '<%= appId %>',
                    name: '<%= _.slugify(appName) %>'
                }
            },
            build: {
                options: {
                    command: 'build'
                }
            },
            emulate: {
                options: {
                    command: 'emulate'
                }
            },
            prepare: {
                options: {
                    command: 'prepare'
                }
            },
            compile: {
                options: {
                    command: 'compile'
                }
            }
        },
        clean: {
            cordova: {
                files: [{
                    dot: true,
                    src: [
                        '<%%= yeoman.app %>'
                    ]
                }]
            }
        }
    });

    grunt.registerTask('default', ['build']);
    grunt.registerTask('lint',    ['jshint']);
    grunt.registerTask('server',  ['build', 'emulate', 'watch:cordova']);
    grunt.registerTask('emulate', ['cordovacli:emulate']);
    grunt.registerTask('demo',    ['build', 'emulate']);

    grunt.registerTask('build',   ['lint', 'cordovacli:build']);

    grunt.task.registerTask('build', 'Builds a Cordova App', function () {
        var check;

        check = (yeomanConfig.app + '/.cordova/config.json');

        if (grunt.file.exists(check)) {
            grunt.log.writeln(check + ' exists, only do build');
            grunt.task.run(['cordovacli:build']);
        } else {
            grunt.log.writeln(check + ' does not exists, creating app and building');
            grunt.task.run(['cordovacli:cordova', 'cordovacli:build']);
        }

    });

    grunt.registerTask('prepare', ['cordovacli:prepare']);
    grunt.registerTask('compile', ['cordovacli:compile']);

};
