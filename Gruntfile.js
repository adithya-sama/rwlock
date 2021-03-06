module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		clean: {
			dist: {
				files: {
					src: [
						'lib',
						'doc'
					]
				}
			}
		},

		jshint: {
			options: {
				camelcase: true,
				curly: true,
				forin: true,
				freeze: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				quotmark: 'single',
				undef: true,
				unused: true,
				strict: true,
				trailing: true,
				boss: true,
				expr: true,
				multistr: true,
				smarttabs: true,
				shadow: true,
				node: true
			},
			dist: {
				files: {
					src: [
						'src/lock.js'
					]
				}
			}
		},

		uglify: {
			options: {
				banner: '/*! ReadWriteLock - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
					' * Author: Alberto La Rocca <a71104@gmail.com> (https://github.com/71104)\n' +
					' * Released under the MIT license\n' +
					' * Copyright (c) <%= grunt.template.today("yyyy") %> Alberto La Rocca */\n'
			},
			dist: {
				files: {
					'lib/lock.js': [
						'src/lock.js'
					]
				}
			}
		},

		nodeunit: {
			dist: {
				files: {
					src: [
						'test/all.js'
					]
				}
			}
		},

		yuidoc: {
			compile: {
				name: 'ReadWriteLock',
				description: '<%= pkg.description %>',
				version: '<%= pkg.version %>',
				url: '<%= pkg.homepage %>',
				options: {
					paths: 'src/',
					outdir: 'doc/',
					linkNatives: 'true'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');
	grunt.loadNpmTasks('grunt-contrib-yuidoc');

	grunt.registerTask('default', ['jshint', 'uglify']);
	grunt.registerTask('test', ['jshint', 'uglify', 'nodeunit']);
	grunt.registerTask('all', ['clean', 'jshint', 'uglify', 'nodeunit', 'yuidoc']);
};
