'use strict';

var path = require('path');

module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: [
          'src/angular-webrtc.js',
          'src/templates.js',
          'src/support.value.js',
          'src/getUserMedia.service.js',
          'src/peerConnection.service.js',
          'src/**/*.controller.js',
          'src/**/*.directive.js'
        ],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': 'dist/<%= pkg.name %>.js'
        }
      }
    },
    ngtemplates: {
      dev: {
        cwd: 'src',
        src: '**/**.html',
        dest: 'src/templates.js',
        options: {
          module: 'ac.angular-webrtc',
          url: function(url){
            return path.basename(url);
          }
        }
      }
    },
    watch: {
      app: {
        files: ['src/**/*.js', 'src/**/*.html'],
        tasks: ['build']
      }
    }
  })
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-angular-templates');


  grunt.registerTask('build', ['ngtemplates', 'concat', 'uglify']);
}