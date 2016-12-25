var gulp = require("gulp");
var plumber = require("gulp-plumber");
var pug = require('gulp-pug');

gulp.task('pug', () => {
    return gulp.src(['./pug/**/*.pug', '!./pug/**/_*.pug'])
        .pipe(plumber())
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./pug/'));
});


gulp.task("watch",function(){
    gulp.watch("./pug/**/*.pug",["pug"]);
});

gulp.task("default",["watch"]);
