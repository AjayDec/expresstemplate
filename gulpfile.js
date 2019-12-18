const { series, src, dest } = require('gulp');


var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var nodemon = require('gulp-nodemon');

var jsFiles = ['*.js', 'src/**/*.js', 'public/js/*.js'];
// The `clean` function is not exported so it can be considered a private task.
// It can still be used within the `series()` composition.
function style () {
   // body
  return src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {
            verbose: true
        }))
        .pipe(jscs())
        .pipe(jscs.reporter());
}

// The `inject` function is exported so it is public and can be run with the `gulp` command.
// It can also be used within the `series()` composition.
function inject(dev) {
    var wiredep = require('wiredep').stream;
    var inject = require('gulp-inject');

    var injectSrc = src(
        ['./public/js/**/*.*js', './public/css/*.css'], {
            read: false
        });
    var injectOptions = {
        ignorePath: '/public',
        addRootSlash: false
    };

    var options = {
        bowerjson: require('./bower.json'),
        directory: './public/lib/',
        ignorePath:  /(..\/)+public\//,
        devDependencies: dev,
        onPathInjected: function(x){console.log(x)},
    };

    return src('./src/views/**/*.ejs')
        .pipe(wiredep(options))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(dest('./src/views'));
}

function serve() {
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
}

exports.inject = inject;
exports.serve = serve;
exports.default = series(style , inject, serve);