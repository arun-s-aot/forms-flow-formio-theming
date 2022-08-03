var gulp = require('gulp');
var del = require('del');
var inlineSource = require('gulp-inline-source');
gulp.task('clean', () => del(['dist/*']));
gulp.task('html', () => gulp.src('./src/index.html').pipe(gulp.dest('dist')));
gulp.task('assets', () => gulp.src('./src/assets/**/*').pipe(gulp.dest('dist/assets')));
gulp.task('flatpickr', () => gulp.src('./node_modules/flatpickr/dist/**/*').pipe(gulp.dest('dist/lib/flatpickr')));
gulp.task('formiojs', () => gulp.src('./node_modules/formiojs/dist/**/*').pipe(gulp.dest('dist/lib/formiojs')));
gulp.task('seamless', () => gulp.src('./node_modules/seamless/build/**/*').pipe(gulp.dest('dist/lib/seamless')));
gulp.task('font-awesome', () => gulp.src('./node_modules/font-awesome/css/font-awesome.css').pipe(gulp.dest('dist/lib/fontawesome')));
gulp.task('formsflowFormioTheme-styles', () => gulp.src('./node_modules/formsflowFormioTheme/dist/css/formsflowFormioTheme.min.css').pipe(gulp.dest('dist/lib/formsflowFormioTheme')));
gulp.task('formsflowFormioTheme-img', () => gulp.src('./node_modules/formsflowFormioTheme/dist/img/**/*').pipe(gulp.dest('dist/lib/img')));
gulp.task('formsflowFormioTheme-fonts', () => gulp.src(['./node_modules/formsflowFormioTheme/dist/fonts/**/*', './node_modules/font-awesome/fonts/*']).pipe(gulp.dest('dist/lib/fonts')));
gulp.task('custom', () => gulp.src('./node_modules/@formio/formsflowFormioTheme/lib/css/styles.css').pipe(gulp.dest('dist/lib/formsflowFormioTheme')));
gulp.task('build', gulp.series('clean', gulp.parallel(
  'html',
  'assets',
  'flatpickr',
  'formiojs',
  'seamless',
  'custom',
  'font-awesome',
  'formsflowFormioTheme-styles',
  'formsflowFormioTheme-img',
  'formsflowFormioTheme-fonts',
)));
gulp.task('inlinesource', function () {
  return gulp.src('./dist/*.html')
      .pipe(inlineSource())
      .pipe(gulp.dest('./dist'));
});

const s3 = require("gulp-s3");
gulp.task('deploy', function () {
  var settings = require('../aws.json');
  settings.bucket = 'apps.form.io';
  settings.region = 'us-east-1';
  return gulp.src('./dist/**/*').pipe(s3(settings,  {
    uploadPath: '/formsflowFormioTheme'
  }));
});

gulp.task('dev-deploy', function () {
  var settings = require('../aws.json');
  settings.bucket = 'apps.form.io';
  settings.region = 'us-east-1';
  return gulp.src('./dist/**/*').pipe(s3(settings,  {
    uploadPath: '/formsflowFormioTheme-dev'
  }));
});
