module.exports = function(grunt) {
    grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),  
    
    // 压缩任务
    uglify: {
      compressjs: {
        files: {
          'js/main.min.js' : ['js/main.js']
        }
      }
    },

    // 监听任务
    watch: {

      scripts: {
        files: ['js/main.js'],
        tasks: ['uglify']
      },

      livereload: {
          options: {
              livereload: '<%= connect.options.livereload %>'
          },
          files: [
              'main.html',
              'css/main.css',
              'js/main.js'
          ]
      }
    },

    // 实时预览任务
    connect: {
      options: {
          port: 9000,
          open: true,
          livereload: 35729,
          // Change this to '0.0.0.0' to access the server from outside
          hostname: 'localhost'
      },
      server: {
        options: {
          port: 9001,
          base: './'
        }
      }
    }
  });

  // 任务加载
  // grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');


  // 任务注册
  grunt.registerTask('watchit',['uglify','connect','watch']);
  grunt.registerTask('default');

};