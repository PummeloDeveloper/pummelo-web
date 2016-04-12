var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('gulp-bower');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');

gulp.task('copyLibDir', function() {
    var bowerConfig = {
        name: 'PummeloWeb',
        dependencies: {
            react: '0.14.8'
        }
    };
    bower({
        name: 'PummeloWeb',
        dependencies: {
            react: '0.14.8'
        }
    });
    ['react'].map(function(comp) {
        gulp.src('bower_components/' + comp + '/**')
            .pipe(gulp.dest('build/lib/' + comp));
    });
    gulp.src('./metronic/**')
        .pipe(gulp.dest('build/lib/metronic'));
});

gulp.task('build', function() {
    var config = Object.create(webpackConfig);
    webpack(config, function(err, stats) {
        if (err) {
            throw new gutil.PluginError('build', err);
        }
        gutil.log('[build]', stats.toString({
            colors: true
        }));
    });
});

gulp.task('default', ['copyLibDir', 'build']);
