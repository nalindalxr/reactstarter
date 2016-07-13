/*gruntfile.js*/

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    browserify: {
      app: {
        options: {
           transform: [['babelify', {presets: ['es2015', 'react']}]]
        },
		files: {
			'dist/scripts/app.js' : ['src/scripts/**/*.js']
		}
      }
    }

  });
 
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('default', ['browserify:app']);

};