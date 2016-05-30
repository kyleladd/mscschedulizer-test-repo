module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
     options: {
       banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
     },
     build: {
       src: 'asset/js/schedulizer_bundle.js',
       dest: 'asset/js/schedulizer_bundle.min.js'
     }
   },
    browserify: {
      dist: {
        files: {
          'asset/js/schedulizer_bundle.js': ['asset/js/bundleme.js']
        }
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css',
          src: ['*css','!*.min.css'],
          dest: 'styles',
          ext: '.min.css',
          extDot: 'last'   // Extensions in filenames begin after the last dot
        },
        {
          expand: true,
          cwd: 'css',
          src: ['*.min.css'],
          dest: 'styles',
          ext: '.css',
          extDot: 'last'   // Extensions in filenames begin after the last dot
        }]
      }
    },
    watch: {
      css: {
        files: 'css/*',
        tasks: ['cssmin'],
        options: {
          spawn:false,
          event:['all']
        },
      },
      scripts: {
        files: 'asset/js/*',
        tasks: ['browserify','uglify'],
        options: {
          spawn:false,
          event:['all']
        },
      },
    },
    copy: {
      main: {
        expand: true, src: ['asset/js/config.example.js'], dest: '',
        // Copy if file does not exist.
        filter: function (filepath) {
            // Return false if the file exists.
            return !(grunt.file.exists(filepath.replace('.example','')));
        },
        rename: function(dest, src) {
          return dest + src.replace('.example','');
        }
      }
    }
  },
    connect: {
      test: {
        options: {
          port: process.env.PORT || 8081,
          base: './',
          keepalive: true
        }
      }
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
  });
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('default', ['copy','browserify','uglify','cssmin']);
  grunt.registerTask('dev', ['default','watch']);
  grunt.registerTask('test', ['connect','karma']);
};