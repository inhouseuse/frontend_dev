document.addEventListener("DOMContentLoaded", function () {

    var app = new Vue({
        el: '#app',
        data: {
            message: 'Hello Vue!'
        }
    });

    var app2 = new Vue({
        el: '#app-2',
        data: {
            url: "https://jp.vuejs.org/"
        }
    })

    var app3 = new Vue({
        el: '#app-3',
        data: {
            flg: true
        }
    })
    
    document.getElementById("btn").addEventListener("click",function(){
        app3.flg = false;
    });

    var app6 = new Vue({
        el: '#app-4',
        data: {
            message: ''
        }
    })



}, false);