"use strict";

const { watch, dest, src, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyle(done) {
  src("scss/app.scss").pipe(sass()).pipe(dest("build/css"));
  done();
}

function devStyle() {
  watch("scss/**/*.scss", buildStyle);
}

exports.default = series(buildStyle, devStyle);
exports.devStyle = devStyle;
exports.buildStyle = buildStyle;
