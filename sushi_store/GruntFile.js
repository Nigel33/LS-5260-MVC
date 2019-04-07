module.exports = function(grunt) {
	grunt.initConfig({
		bower_concat: {
			all: {
				dest: "public/javascripts/vendor/all.js",
				dependencies: {
					"underscore": "jquery",
					"backbone": "underscore",
				},
			},
		},

		uglify: {
			my_target: {
				files: {
					"public/javascripts/vendor/all.js": ["public/javascripts/vendor/all.js"],
				},
			},
		},

		handlebars: {
			all: {
				files: {
					"public/javascripts/handlebars/templates.js": ["handlebars/**/*.hbs"],
				},
			},

			options: {
				processContent: removeWhitespace,
				processName: extractFileName,
			},
		},

		watch: {
			scripts: {
				files: ["handlebars/**/*.hbs"],
				tasks: ['runHandlebars'],
				options: {
					spawn: false,
				},
			},
		}
	});



	[
		"grunt-bower-concat",
		"grunt-contrib-uglify",
		"grunt-contrib-handlebars",
		"grunt-contrib-watch"
	].forEach(function(task) {
		grunt.loadNpmTasks(task);
	});


	grunt.registerTask("default", ['bower_concat', 'uglify']);
	grunt.registerTask("runHandlebars", ['handlebars']);
	grunt.registerTask('runWatch', ['watch']);
};

function removeWhitespace(template) {
	return template.replace(/ {2,}/mg, '').replace(/\r|\n/mg, '');
}

function extractFileName(file) {
	return file.match(/\/(.+)\.hbs$/).pop();
}
