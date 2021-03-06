var Man = {
    wieght: 75,
    height: 175,
    name: "홍길동",
    gender: "M",
    run: function () {
        console.log("뛴다")
    },
    eat: function () {
        console.log("먹는다")
    }
};

Man.name = "홍길순";
console.log(Man.name);
Man.run();
Man.eat();

// var Human = (function(){}()); <- 암기

var Human = (function () {
    function Human(_name) {
        this.name = _name;
    }
    Human.prototype.eat = function (food) {
        console.log(this.name + "이(가) " + food + "을(를) 먹습니다.");
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
console.log(hong);
console.log(hong.name);
hong.eat("양꼬치");

var kilsun = new Human("홍길순");
console.log(kilsun);
console.log(kilsun.name);
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
        var per = Math.floor(Math.random() * 70) + 30;
        li.css({
            "height": per + "%"
        });
    }, 100);
});

// 암기
var Equalizer = (function () {
    function Equalizer(parent, bgColor, size) {
        var obj = this;
        var html = '<ul>'
        for (var i = 1; i <= 5; i++) html += '<li></li>';
        html += '</ul>';
        this.parent = $(parent);
        this.bgColor = bgColor;
        this.size = size;
        this.parent.append(html);
        this.ul = this.parent.children("ul");
        this.li = this.ul.children("li");
        console.log(this.li);
        console.log(this.li[3]);
        console.log(this.li.eq(3));
        console.log(this.li.eq(3)[0]);

        this.li[0].style.backgroundColor = this.bgColor;
        this.ul.css({
            "width": this.size + "px",
            "height": this.size + "px",
            "position": "relative",
        });
        this.li.each(function (i) {
            $(this).css({
                "background-color": obj.bgColor,
                "width": "20%",
                "height": "20%",
                "left": (i * 20) + "%",
                "position": "absolute",
                "bottom": "0",
            });
            var li = $(this);
            var interval = setInterval(function () {
                li.css({
                    "height": (Math.floor(Math.random()*81)+20)+"%"
                });
            }, 100);
        });
    }
    return Equalizer;
}());