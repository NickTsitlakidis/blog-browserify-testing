module.exports = function(config)
{
    config.set({

        basePath: '',

        frameworks: ['browserify', 'jasmine'],

        files: [
            'src/tests/*.js'
        ],

        exclude: [
        ],

        preprocessors: {
            'src/tests/*.js': ['browserify']
        },

        reporters: ['progress'],

        port: 9876,

        colors: true,

        logLevel: config.LOG_INFO,

        autoWatch: false,

        browsers: ['PhantomJS'],

        browserify: {
            debug: true,
            transform: []
        },

        plugins: [
            'karma-phantomjs-launcher',
            'karma-jasmine','karma-bro'],

        singleRun: true
    });
};