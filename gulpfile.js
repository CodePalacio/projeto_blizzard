const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoPrefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');


// Compilando SASS, adicionando autoPrefixer e refresh
const compilaSass = () => {
    return gulp.src('src/scss/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoPrefixer({
        overrideBrowserslist: ['last 2 versions'] , 
        cascade: false 
    }))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream())
}
gulp.task('sass', compilaSass);

const libsCss = () => {
    return gulp.src('./src/css/lib/*.css')
    .pipe(concat('libs.css'))
    .pipe(gulp.dest('./src/css'))
    .pipe(browserSync.stream());
}
gulp.task('libsCss', libsCss);

const gulpJs = () => {
    return gulp.src('src/js/scripts/*.js')
    .pipe(concat('app.js'))
    .pipe(babel({
        presets: ['babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('src/js'))
    .pipe(browserSync.stream())
}
gulp.task('appJs', gulpJs)

// Plugins / bibliotecas
const libsJs = () => {
    return gulp
    .src(['./src/js/lib/aos.min.js', './src/js/lib/swiper.min.js'])
    .pipe(concat('libs.js'))
    .pipe(gulp.dest('src/js'))
    .pipe(browserSync.stream());
}
gulp.task('libsJs', libsJs);

// Watcher para alterações em sass e html 
const watcher = () => {
    gulp.watch('src/scss/*.scss', compilaSass);
    gulp.watch('*.html').on('change', browserSync.reload);
    gulp.watch('src/js/scripts/*.js', gulpJs);
    gulp.watch('src/js/libs/*.js', libsJs);
    // gulp.watch('src/css/*.css', libsCss);
}
gulp.task('watch', watcher);

// Cria o nosso browser a partir do html
const browser = () => {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
}
gulp.task('browser-sync', browser)

// Executa as funçoes watcher e browserSync
gulp.task('default', gulp.parallel(watcher, browser, compilaSass, libsCss, gulpJs, libsJs));  