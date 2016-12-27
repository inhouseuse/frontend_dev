document.addEventListener("DOMContentLoaded", function () {

    var app = new Vue({
        el: "#app",
        data: {
            message: "Hello Vue!"
        }
    });

    var app2 = new Vue({
        el: "#app-2",
        data: {
            url: "https://jp.vuejs.org/"
        }
    });

    var app3 = new Vue({
        el: "#app-3",
        data: {
            flg: true
        }
    });

    document.getElementById("btn").addEventListener("click", function () {
        app3.flg = app3.flg ? false : true;
    });

    var _items = [{
        text: "Apple",
        url: "http://www.apple.com"
    }, {
        text: "Amazon",
        url: "https://www.amazon.co.jp/"
    }, {
        text: "Google",
        url: "https://www.google.co.jp/"
    }, {
        text: "Microsoft",
        url: "https://www.microsoft.com/ja-jp/"
    }];

    var app4 = new Vue({
        el: "#app-4",
        data: {
            items: _items
        }
    });

    var app5 = new Vue({
        el: "#app-5",
        data: {
            message: ""
        }
    });



}, false);