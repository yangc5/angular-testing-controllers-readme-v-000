// Karma configuration
// Generated on Tue Jan 19 2016 01:52:17 GMT+0000 (GMT)

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'js/angular.js',
            'js/angular-mocks.js',
            'js/app/**/*.js',
            'tests/*.spec.js'
        ],

       plugins: [
            require("karma-jasmine"),
            require("karma-spec-reporter"),
            require("karma-phantomjs-launcher")
        ],

        exclude: [],
        preprocessors: {},
        reporters: ['spec'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['PhantomJS'],
        singleRun: true,
        concurrency: Infinity
    })
}
