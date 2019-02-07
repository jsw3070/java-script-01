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
log(Man. name);
Man.run();
Man.eat();

// var Human = (function(){}()); <- 암기

var Human = (function(){
    function Human(_name) {
      this.name = _name;
    }
    Human.prototype.eat = function(food){
      log(this.name + "이(가) "+ food + "을(를) 먹습니다.");
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
log(hong. name);
hong.eat("양꼬치");

var kilsun = new Human("홍길순");
log(kilsun);
log(kilsun.name);
kilsun.eat("회");

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