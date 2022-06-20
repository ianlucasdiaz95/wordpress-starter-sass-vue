// Gulp loader

const {
    src,
    dest,
    task,
    watch,
    series,
    parallel
} = require('gulp');

// --------------------------------------------
// Dependencies
// --------------------------------------------

const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const webpack = require('webpack-stream');
const browserSync = require('browser-sync').create();


// Project Paths

let styleSrc = 'assets/css/scss/**/*.scss';
let jsSrc = 'assets/js/**/*.*';

/**AUTOPREFIXER */
const AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
];

// Compile SASS

function css(done) {

    try {
        src(styleSrc, { sourcemaps: true })
            .pipe(sass())
            .pipe(postcss([autoprefixer({ browsers: AUTOPREFIXER_BROWSERS }), cssnano()]))
            .pipe(rename({
                basename: 'style',
                suffix: '.min'
            }))

            .pipe(dest('./assets', { sourcemaps: '.' }));
        done();
    } catch (error) {
        console.log(error);
    }


};

async function js(done) {
    try {
        await src(jsSrc)
            .pipe(await webpack(require('./webpack.config.js')))
            .pipe(dest('./assets'));
        done();
    } catch (error) {
        console.log(error);
    }

}

// Watch for changes

function watcher() {

    browserSync.init({
        /*server: {
            baseDir: "./"
        },*/
        host: 'localhost/ibp/',
        proxy: "localhost/ibp/",
        port: 80,
        notify: false
    });

    watch(styleSrc, series(css));
    watch(jsSrc, series(js));
    watch(['assets/css/*.css', './**/*.php', 'assets/js/**/*.js']).on('change', browserSync.reload);

};


//Run tasks
let build = parallel(watcher);
task('default', build);
task('scss', parallel(css));
