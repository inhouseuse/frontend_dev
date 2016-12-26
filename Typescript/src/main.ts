// Typescriptの特徴の一つ、静的型付け
// Gulpでのコンパイル方法は以下参照
// https://www.typescriptlang.org/docs/handbook/gulp.html

function hello(name: string) {
    console.log(`Hello My Name is ${name}`);
}
hello("TypeScript");