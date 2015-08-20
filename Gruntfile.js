module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Project configuration.
  grunt.initConfig({
    uglify: {
      options: {
        banner: '/*! Grunt Uglify <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/overlay.js',
        dest: 'dist/overlay.min.js'
      }
    },
    watch: {
      scripts: {
        files: ['src/overlay.js'],
        tasks: ['uglify']
      }
    }
  });

  grunt.registerTask('default', ['watch']);
};