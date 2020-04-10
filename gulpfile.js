const { src, dest, parallel, series, watch } = require("gulp");
const sass = require("gulp-sass");
const minifyCSS = require("gulp-csso");
const concat = require("gulp-concat");
const browsersync = require("browser-sync").create();

// BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./",
    },
    port: 3000,
    notify: false,
  });
  done();
}

// BrowserSync Reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

function css() {
  return (
    src("scss/*.scss")
      .pipe(sass())
      // .pipe(minifyCSS())
      .pipe(dest("css/"))
  );
}

function js() {
  return src(
    "js/**/*.js",
    {
      sourcemaps: true,
    }
      .pipe(concat("app.min.js"))
      .pipe(dest("js"))
  );
}

function watchFiles() {
  watch("scss/**/*.scss", series(css, browserSyncReload));
  watch("js/**/*.js", series(js, browserSyncReload));
  watch("**/*.html", browserSyncReload);
}

exports.js = js;
exports.css = css;
exports.default = parallel(watchFiles, browserSync);
