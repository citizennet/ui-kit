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
    compass: {
      dist: {
        options: {
          sassDir: 'sass',
          cssDir: 'dist/css/citizennet'
        }
      }
    }
  });

  /* Load Grunt plugins */
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-concat-css');

  grunt.registerTask('default', ['compass:dist', 'concat_css:vendor', 'concat_css:all']);
};