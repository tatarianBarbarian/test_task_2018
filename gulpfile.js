var gulp = require('gulp');
var sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){
	gulp.src('./source/sass/style.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./source/css'));
})

gulp.task('sass:watch', function(){
	gulp.watch('./source/sass/**/*.scss', ['sass']);
});

gulp.task('autopr', () =>
    gulp.src('source/css/style.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('source/css'))
);