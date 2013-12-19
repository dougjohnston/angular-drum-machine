module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({

    //Read the package.json (optional)
    pkg: grunt.file.readJSON('package.json'),

    // Metadata.
    meta: {
        basePath: './',
        srcPath: './css/sass/',
        deployPath: './css/'
    },

    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> ',

    // Task configuration.
    connect: {
      server: {
        options: {
          port: 8080,
          base: './',
          keepalive: true
        }
      }
    },

    sass: {
        dist: {
            files: {
                '<%= meta.deployPath %>main.css': '<%= meta.srcPath %>main.scss'
            }
        }
    },

    watch: {
        scripts: {
            files: [
                '<%= meta.srcPath %>/**/*.scss'
            ],
            tasks: ['sass']
        }
    }

  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['sass']);
};
