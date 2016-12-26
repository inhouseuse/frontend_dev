"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Member = function () {
    function Member(name, age) {
        _classCallCheck(this, Member);

        this.name = name;
        this.age = age;
    }

    _createClass(Member, [{
        key: "getInfo",
        value: function getInfo() {
            return "My name is " + this.name + ". I'm " + this.age + " year's old.";
        }
    }], [{
        key: "getMyname",
        value: function getMyname() {
            return "static";
        }
    }]);

    return Member;
}();

console.log(Member.getMyname());

var m = new Member("Atom", 24);

console.log(m.getInfo());

m.name = "vscode";

console.log(m.name);