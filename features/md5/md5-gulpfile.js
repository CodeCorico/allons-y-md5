'use strict';

module.exports = function($gulp) {

  var sourcemaps = require('gulp-sourcemaps'),
      uglify = require('gulp-uglify'),
      rename = require('gulp-rename'),
      insert = require('gulp-insert');

  $gulp.task('md5', function(done) {
    $gulp
      .src('node_modules/blueimp-md5/js/md5.js')
      .pipe(insert.transform(function(contents) {
        return contents + ';';
      }))
      .pipe($gulp.dist('vendor'))
      .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(rename({
        extname: '.min.js'
      }))
      .pipe(sourcemaps.write('./'))
      .pipe($gulp.dist('vendor'))
      .on('end', done);
  });

  return 'md5';
};
