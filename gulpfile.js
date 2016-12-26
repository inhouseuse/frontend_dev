var gulp = require("gulp");
var plumber = require("gulp-plumber");
var babel = require("gulp-babel");
var pug = require("gulp-pug");

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


gulp.task("watch",function(){
    gulp.watch("./pug/**/*.pug",["pug"]);
    gulp.watch("./es6/**/*.js",["babel"]);
});

gulp.task("default",["watch"]);
