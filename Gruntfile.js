module.exports = function(grunt) {

  // Initialize Grunt
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      options: {
        livereload: true
      },
      sass: {
        files: 'sass/*',
        tasks: ['compass:dist']
      }
    },
    compass: {
      dist: {
        options: {
          sassDir: 'sass',
          cssDir: 'dist/css'
        }
      }
    }
  });

  /* Load Grunt plugins */
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');

  grunt.registerTask('default', ['compass:dist']);
};