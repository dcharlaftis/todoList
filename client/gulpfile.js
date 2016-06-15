var gulp = require('gulp'),
  jshint = require('gulp-jshint'),
  uglify = require('gulp-uglify'),
  rename = require("gulp-rename"),
  del = require('del'),
  concat = require('gulp-concat');

var js_lib_files = [
  'bower_components/jquery/dist/jquery.min.js',
  'bower_components/angular/angular.min.js',
  'bower_components/angular-ui-router/release/angular-ui-router.min.js',
  'bower_components/angular-resource/angular-resource.min.js',
  'bower_components/angular-local-storage/dist/angular-local-storage.min.js',
  'bower_components/angular-bootstrap/ui-bootstrap.min.js',
  'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
  'bower_components/angular-route/angular-route.min.js',
  'bower_components/lodash/lodash.min.js',
  'bower_components/jquery/dist/jquery.min.js',
  'bower_components/bootstrap/dist/js/bootstrap.min.js',
  'assets/bootstrap/js/datatables.min.js'
];

var app_files = [
  'app/_appModule.js',
  'app/appConfig.js',
  'app/appRouter.js',
  'app/controllers/*.js',
  'app/layout/*.js'
];

var html_css_files = [
  'app/views/*.html',
  'assets/img/*.*',
  'assets/bootstrap/css/*.*',
  'assets/bootstrap/fonts/*.*',
  'assets/bootstrap/js/*.*',
  'bower_components/datatables/media/css/*.*'
];

//views =  html files
gulp.task('html_css_files', function() {
  gulp.src(html_css_files, {
      base: './'
    })
    .pipe(gulp.dest('dist'));
});

//javascript  files

gulp.task('js_lib_files', function() {
  return gulp.src(js_lib_files)
    .pipe(uglify())
    .pipe(concat('js_lib.min.js'))
    .pipe(gulp.dest("."));
});

gulp.task('app_files', function() {
  return gulp.src(app_files)
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(uglify())
    .pipe(concat('app_files.min.js'))
    .pipe(gulp.dest("."));
});

gulp.task('js_all_files', function() {
  return gulp.src(['js_lib.min.js', 'app_files.min.js'])
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest("./dist"));
});

gulp.task('clean:.', function() {
  return del(['js_lib.min.js', 'app_files.min.js']);
});

gulp.task('rename_index', function() {
  gulp.src("index.min.html")
    .pipe(rename("index.html"))
    .pipe(gulp.dest("./dist"));
});


gulp.task('phase1', ['html_css_files', 'js_lib_files', 'app_files', 'rename_index']);
gulp.task('phase2', ['js_all_files']);
gulp.task('phase3', ['clean:.']);

// TODO: does not work I use gulp phase1 && gulp phase2 && gulp phase3
//gulp.task('default', ['phase1', 'phase2', 'phase3']);
