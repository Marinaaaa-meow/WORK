const gulp = require('gulp');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const gutil = require('gulp-util');
const stylus = require('gulp-stylus');

var paths = {
  stylusEntry: ["./src/stylus/*.styl"]
};

gulp.task("stylus", function(done) {
  gulp.src(paths.stylusEntry)
    .pipe(stylus())
    .on('error', gutil.log)
    .pipe(gulp.dest('./static/css'))
    .pipe(reload({stream:true}));
    
    
    done();
});

gulp.task('watch', function(done) {
  gulp.watch("./index.html", reload);
  gulp.watch("./src/stylus/*.styl", gulp.series('stylus'), reload);
  
  done();
});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task("default", gulp.series("stylus", "watch", "browser-sync"));