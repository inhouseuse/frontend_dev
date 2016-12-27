// https://www.npmjs.com/package/gulp-babel
// 公式ホームページを確認するとgulp-babel + babel-preset-es2015が必要

class Member {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getInfo() {
        return `My name is ${ this.name }. I'm ${ this.age } year's old.`;
    }
    static getMyname() {
        return 'static';
    }
    
}

console.log(Member.getMyname());

let m = new Member('Atom', 24);

console.log(m.getInfo());

m.name = 'vscode';


console.log(m.name);