var gulp = require("gulp");
var plumber = require("gulp-plumber");
var babel = require("gulp-babel");
var pug = require("gulp-pug");
var browserify = require("browserify");
var source     = require("vinyl-source-stream");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");


gulp.task("pug", () => {
    return gulp.src(["./pug/**/*.pug", "!./pug/**/_*.pug"])
        .pipe(plumber())
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest("./pug/"));
});

gulp.task("babel", function () {
    return gulp.src("es6/src/*.js")
        .pipe(babel({
            presets: ["es2015"]
        }))
        .pipe(gulp.dest("es6/lib"));
});

// browserify and gulp.
gulp.task("browserify", function () {
    return browserify("./es6/browserify/src/main.js")
            .bundle()
            .pipe(source("bundle.js"))
            .pipe(gulp.dest("./es6/browserify/lib"));
});

gulp.task("ts", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("./Typescript/dist"));
});


gulp.task("watch",function(){
    gulp.watch("./pug/**/*.pug",["pug"]);
    // gulp.watch("./es6/**/*.js",["babel"]);
});

gulp.task("default",["watch"]);
