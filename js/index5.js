// var : ES5
// let : ES6
const log = console.log;

console.log("메세지");
log("메세지를 입력하고싶어.");
var Man = {
    wieght: 75,
    height: 175,
    name: "홍길동",
    gender: "M",
    run: function () {
        log("뛴다")
    },
    eat: function () {
        log("먹는다")
    }
};

Man.name = "홍길순";
log(Man.name);
Man.run();
Man.eat();

// var Human = (function(){}()); <- 암기

var Human = (function () {
    function Human(_name) {
        this.name = _name;
    }
    Human.prototype.eat = function (food) {
        log(this.name + "이(가) " + food + "을(를) 먹습니다.");
    }
    return Human;
}());

// ES6
/* class Human {
    constructor() {

    }
    function eat() {

    }
}
 */


var hong = new Human("홍길동");
log(hong);
log(hong.name);
hong.eat("양꼬치");

var kilsun = new Human("홍길순");
log(kilsun);
log(kilsun.name);
kilsun.eat("회");

/* jQuery를 쓰는 이유
1. 선택자가 편하다
2. animate,fadein, fadeout, slideDown, slideUp, hide, show가 이미 만들어져있다.

*/

/* $("#box1").click(function(){
    $(this).animate({"width":"100%", "height":"100%"}, 2000);
}); */

// $("#box1").click(function(){
//     $(this).animate({"width":"100%"}, 1000, function(){
//         $(this).animate({"height":"100%"}, 500);
// });
// });

// var n = 0
// var interval = setInterval(function(){
//     log(n++);
// }, 500);

$("#music > li").each(function () {
    var li = $(this);
    var interval = setInterval(function () {
        var per = Math.floor(Math.random()*70)+30;
        li.css({"height":per+"%"});
    }, 100);

});

/* 자바스크립트 객체
log(Man.name);
Man.run();
Man.eat(); */

// window.alert()

/* var window = {
    alert: function (str) {
        log(str);
    }
}; */