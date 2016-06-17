"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var less = require("gulp-less");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync");

gulp.task("style", function() {
  gulp.src("less/style.less")
    .pipe(plumber())
    .pipe(less([
      autoprefixer({browsers: [
        "last 1 version",
        "last 2 Chrome versions",
        "last 2 Firefox versions",
        "last 2 Opera versions",
        "last 2 Edge versions"
      ]})
    ]))
    .pipe(gulp.dest("css"))
    .pipe(server.reload({stream: true}));
});

gulp.task("serve", ["style"], function() {
  server.init({
    server: ".",
    notify: false,
    open: true,
    ui: false
  });

  gulp.watch("less/**/*.less", ["style"]);
  gulp.watch("*.html").on("change", server.reload);
  gulp.watch("*.js").on("change", server.reload);
});
