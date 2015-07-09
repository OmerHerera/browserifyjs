module.exports = function(grunt) {
    require('time-grunt')(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            react: {
                files: './frameworks/reactJS/*.jsx',
                tasks: ['browserify']
            }
        },
        browserify: {
            vanillaJS: {
                "src": "./frameworks/vanillaJS/main.js",
                "dest": "./frameworks/vanillaJS/main-min.js"
            },
            backbone: {
                "src": "./frameworks/backbone/main.js",
                "dest": "./frameworks/backbone/main-min.js"
            },
            reactJS: {
                options: {
                    transform: [require('grunt-react').browserify]
                },
                src: ['./frameworks/reactJS/*.jsx'],
                dest: './frameworks/reactJS/main-min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [
        'browserify'
    ]);
};
