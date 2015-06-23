var gulp = require('gulp')
,   sass = require('gulp-ruby-sass')
;

gulp.task('css', function() {
  return sass('sass/', {style: 'expanded', compass: true})
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
  gulp.watch('sass/**/*.scss', ['css']);
});
