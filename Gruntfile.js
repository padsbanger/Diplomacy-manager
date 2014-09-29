'use strict';

module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({
    ngdocs: {
      options: {
        dest: 'docs',
        html5Mode: false,
        startPage: '/controllers',
        scripts: ['js/build/libs.js',
          'js/build/controllers.js',
          'js/build/services.js'
        ],
        title: 'Diplomacy Manager Documentation'
      },
      controllers: {
        src: ['js/src/controllers/*.js', 'js/src/controllers/**/*.js', 'js/src/controllers/**/**/*.js'],
        title: 'Controllers'
      },
      directives: {
        src: ['js/src/directives/*.js', 'js/src/directives/**/*.js', 'js/src/directives/**/**/*.js'],
        title: 'Directives'
      },
      services: {
        src: ['js/src/services/*.js', 'js/src/services/**/*.js', 'js/src/services/**/**/*.js'],
        title: 'Services'
      },
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js',
      },
      e2e: {
        configFile: 'karma-e2e.conf.js',
      }
    },

    bower: {
      install: {
        cleanBowerDir: true,
        cleanup: true
      }
    },


    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'styles/css/styles.css': 'styles/sass/styles.scss'
        }
      }
    },

    concat: {
      options: {
        separator: ';',
      },
      libs: {
        src: [
          'libs/angular/angular.js',
          'libs/angular-animate/angular-animate.js',
          'libs/angular-loader/angular-loader.js',
          'libs/angular-mocks/angular-mocks.js',
          'libs/angular-route/angular-route.js',
          'libs/angular-scenario/angular-scenario.js',
          "libs/ngstorage/ngStorage.js"
        ],
        dest: 'js/build/libs.js'
      },
      controllers: {
        src: ['js/src/controllers/*.js'],
        dest: 'js/build/controllers.js'
      },
      services: {
        src: ['js/src/services/*.js'],
        dest: 'js/build/services.js'
      },
      filter: {
        src: ['js/src/filters/*.js'],
        dest: 'js/build/filters.js'
      },
    },

    uglify: {
      options: {
        mangle: false
      },
      build: {
        files: {
          'js/build/app.min.js': [
            'js/src/app.js',
            'js/build/controllers.js',
            'js/build/services.js'
          ],
          'js/build/libs.min.js': [
            'js/build/libs.js'
          ]
        }
      }
    },

    scriptlinker: {
      devlib: {
        options: {
          startTag: '<!--LIBS-->',
          endTag: '<!--LIBS END-->',
          fileTmpl: '<script src="/%s"></script>'
        },
        files: {
          'index.jsp': [
            'js/build/libs.js'
          ]
        }
      },
      devapp: {
        options: {
          startTag: '<!--SCRIPTS-->',
          endTag: '<!--SCRIPTS END-->',
          fileTmpl: '<script src="/%s"></script>'
        },
        files: {
          'index.jsp': [
            'js/src/app.js',
            'js/build/controllers.js',
            'js/build/filters.js',
            'js/build/services.js',
            'js/build/directives.js',
            'js/build/modules.js'
          ]
        }
      },
    },

    /**/

    watch: {
      styles: {
        files: ['styles/sass/*.scss'],
        tasks: ['sass'],
        options: {
          livereload: {
            port: 9002
          }
        },
      },
      services: {
        files: ['js/src/services/*.js'],
        tasks: ['concat:services'],
        options: {
          livereload: {
            port: 9002
          }
        },
      },
      controllers: {
        files: ['js/src/controllers/*.js'],
        tasks: ['concat:controllers'],
        options: {
          livereload: {
            port: 9002
          }
        },
      },
      filters: {
        files: ['js/src/filters/*.js'],
        tasks: ['concat:filters'],
        options: {
          livereload: {
            port: 9002
          }
        },
      },
      app: {
        files: ['js/src/*.js'],
        options: {
          livereload: {
            port: 9002
          }
        },
      },
      html: {
        files: ['views/*.html', 'index.html'],
        options: {
          livereload: {
            port: 9002
          }
        },
      },
    },

    connect: {
      server: {
        options: {
          port: 1338,
          hostname: '*',
          livereload: 9002,
          open: true,
        }
      },
    }
  });

  grunt.registerTask('documentation', ['ngdocs']);

  grunt.registerTask('default', function() {
    grunt.task.run([

    ]);
  });

  grunt.registerTask('production', function() {
    grunt.task.run([
      'bower:install',
      'concat',
      'less',
      'uglify'
    ]);
  });

  grunt.registerTask('dev', function() {
    grunt.task.run([
      'bower:install',
      'sass',
      'concat',
      'karma:unit',
      'connect',
      'watch'
    ]);
  });

};