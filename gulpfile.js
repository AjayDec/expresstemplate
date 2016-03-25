var gulp = require('gulp');
var gulp = require('gulp-param')(gulp, process.argv);
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var nodemon = require('gulp-nodemon');

var jsFiles = ['*.js', 'src/**/*.js', 'public/js/*.js'];

gulp.task('style', function () {
    return gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {
            verbose: true
        }))
        .pipe(jscs())
        .pipe(jscs.reporter());

});

gulp.task('inject', function (dev) {
    var wiredep = require('wiredep').stream;
    var inject = require('gulp-inject');

    var injectSrc = gulp.src(
        ['./public/js/*.*js', './public/css/*.css'], {
            read: false
        });
    var injectOptions = {
        ignorePath: '/public'
    };

    var options = {
        bowerjson: require('./bower.json'),
        directory: './public/lib',
        ignorePath: '../../public',
        devDependencies: dev
    };

    return gulp.src('./src/views/*.ejs')
        .pipe(wiredep(options))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./src/views'));
});

gulp.task('serve', ['style', 'inject'], function () {
    var options = {
        script: 'app.js',
        delayTime: 1,
        env: {
            'PORT': 3000
        },
        watch: jsFiles
    };
    return nodemon(options)
        .on('restart', function (env) {
            console.log('Restarting....');
        });
});