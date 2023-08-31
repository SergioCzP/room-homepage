"use strict";

const { watch, dest, src, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cssnano = require("gulp-cssnano");
const sourcemaps = require("gulp-sourcemaps");

function buildStyle(done) {
  src("scss/app.scss")
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(cssnano())
    .pipe(sourcemaps.write("."))
    .pipe(dest("build/css"));
  done();
}

function devStyle() {
  watch("scss/**/*.scss", buildStyle);
}

exports.default = series(buildStyle, devStyle);
exports.devStyle = devStyle;
exports.buildStyle = buildStyle;
