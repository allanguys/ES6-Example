

var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var gutil = require("gulp-util"); 
var babel = require("gulp-babel");
var webpack = require( 'webpack');
var webpackConfig = require('./webpack.config');



gulp.task("bable", function () {
  return gulp.src("src/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(gulp.dest("target"));
});

gulp.task('webpack', ['bable'], function(callback) {
  var myConfig = Object.create(webpackConfig);
  myConfig.plugins = [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin()
  ];

  // run webpack
  webpack(myConfig, function(err, stats) {
    if (err) throw new gutil.PluginError('webpack', err);
    gutil.log('[webpack]', stats.toString({
      colors: true,
      progress: true
    }));
    callback();
  });



});


gulp.task('default',['webpack'],function() {
  gulp.watch(["src/**/*.js"], ['webpack']);
});

