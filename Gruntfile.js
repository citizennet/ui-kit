module.exports = function(grunt) {

  // Initialize Grunt
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      options: {
        livereload: true
      },
      sass: {
        files: [
          'sass/*',
          'sass/**/*.scss'
        ],
        tasks: ['default']
      }
    },
    concat_css: {
      options: {
        separator: ';\n'
      },
      vendor: {
        src: [
          'bower_components/angular-bootstrap-toaster/toaster.css',
          'bower_components/jquery-ui/themes/base/jquery.ui.resizable.css',
          'bower_components/font-awesome/css/font-awesome.min.css',
          'bower_components/chosen/chosen.min.css'
        ],
        dest: 'dist/css/vendor/all.css'
      },
      all: {
        src: [
          'dist/css/vendor/all.css',
          'dist/css/citizennet/common.css'
        ],
        dest: 'dist/css/all.css'
      }
    },
    concat: {
      options: {
        separator: ';\n'
      },
      vendor: {
        src: [
          // I limited the JS assets to just a small list of utilities. I want each repo to have
          // full control over the version, and possibly implementation of dependencies. Since each dependency
          // is just a 1 line include in Bower & Grunt, it is already DRYed up
          "bower_components/jquery/dist/jquery.min.js",
          "bower_components/jquery-ui/ui/minified/jquery.ui.core.min.js",
          "bower_components/jquery-ui/ui/minified/jquery.ui.widget.min.js",
          "bower_components/jquery-ui/ui/minified/jquery.ui.mouse.min.js",
          "bower_components/jquery-ui/ui/minified/jquery.ui.sortable.min.js",
          "bower_components/jquery-ui/ui/minified/jquery.ui.droppable.min.js",
          "bower_components/jquery-ui/ui/minified/jquery.ui.draggable.min.js",
          "bower_components/jquery-ui/ui/minified/jquery.ui.resizable.min.js",
          "dist/js/vendor/bootstrap.min.js"
        ],
        dest: 'dist/js/all.min.js'
      }
    },
    compass: {
      dist: {
        options: {
          sassDir: 'sass',
          cssDir: 'dist/css/citizennet'
        }
      }
    },
    uglify: {
      options: {
        sourceMap: true
      },
      vendor: {
        files: {
          'dist/js/all.js': ['dist/js/all.min.js']
        }
      }
    }
  });

  /* Load Grunt plugins */
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['compass:dist', 'concat_css:vendor', 'concat_css:all', 'concat:vendor']);
};