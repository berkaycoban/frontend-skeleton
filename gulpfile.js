const { src, dest, parallel, series, watch } = require("gulp");
const sass = require("gulp-sass");
const browsersync = require("browser-sync").create();

// BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./app/",
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
  return src("scss/*.scss").pipe(sass()).pipe(dest("./app/css/"));
}

function watchFiles() {
  watch("scss/**/*.scss", series(css, browserSyncReload));
  watch("./app/**/*.html", browserSyncReload);
}

exports.css = css;
exports.default = parallel(watchFiles, browserSync);
