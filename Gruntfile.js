// Gruntfile.js
// src : https://24ways.org/2013/grunt-is-not-weird-and-hard/

// Src : https://github.com/chriscoyier/My-Grunt-Boilerplate/blob/master/Gruntfile.js
	
module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            // 2. Configuration for concatinating files goes here.
            options: {
            	stripBanners: true,
		      	separator: ';'
		    },
		    dist: {
		      	src: ['bower_components/angular/angular.min.js', 'bower_components/jquery/dist/jquery.min.js'],
		      	dest: 'client/js/app.js'
		    }
        },
        uglify: {
		    build: {
		        src: 'client/js/app.js',
		        dest: 'client/js/app.min.js'
		    }
		},
		imagemin: {
		    dynamic: {
		        files: [{
		            expand: true,
		            cwd: 'images/',
		            src: ['**/*.{png,jpg,gif}'],
		            dest: 'client/images/'
		        }]
		    }
		},
		// sass: {
		//     dist: {
		//         options: {
		//             style: 'compressed'
		//         },
		//         files: {
		//             'css/build/global.css': 'css/global.scss'
		//         }
		//     } 
		// },
		watch: {
		    scripts: {
		        files: ['client/js/*.js'],
		        tasks: ['concat', 'uglify'],
		        options: {
		            spawn: false
		        }
		    }
		 //    ,
		 //    css: {
			//     files: ['css/*.scss'],
			//     tasks: ['sass'],
			//     options: {
			//         spawn: false
			//     }
			// }
		}
    });

    // 3. Where we tell Grunt we plan to use this plug-in. - only concat, no minify
    grunt.loadNpmTasks('grunt-contrib-concat');

    // official plugin for minifying code.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // OPTIMIZE OUR IMAGES
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // SasS compression
   // grunt.loadNpmTasks('grunt-contrib-sass');

    // Watch for changes
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'watch']);
    //, 'sass'
};