/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */

/*
selector(선택자)
- $(".div")
- $(".div").children("ul");              //ul- 자식선택자
- $(".div").children("il");              //understand
- $(".div").find("il");                  //li - 자손선택자
- $(".li").eq(2);                     //<li class = "li">3</li>
- $(".li").eq(2)next();               //<li class = "li">3</li>
- $(".li").eq(2).prev();           //<li class = "li">4</li>
- $(".li").eq(2).parent();           //<ul class = "li">
- $(".li").eq(2).parent2().parent();       //<div class = "div">

<div class="div">
<ul class="ul">
<li class="li">1</li>
<li class="li">2</li>
<li class="li">3</li>
<li class="li">4</li>
</ul>
</div>

$(".li").click(function(){
    var n = $(this).index();
});
$(".li").each(function(1){
console.log(1)
});

2. DOM(Document Object Model)
var div = $(".div")
- $().append('<div></div>');
- $().append(div);
- $('<div></div>').appendTo();
- $(div).appendTo(), pretend(), pretendTo() : Insert
- $(".div").html('<div></div>') : update - innerHTML과 같다.
  => <div class="div"><div></div></div>
- $(".div").empty() : Delete 
  => <div class="div"></div>
- $(".div").remove() : Delete
  => .div 자체를 삭제한다.
- var ul = $(".ul").clone(); ctrl+c
  $(".div").append(ul); ctrl+v; 

3. Ainmation
- 실습 index6.js 참조

4. Ajax
- 실습 index7.js 참조 
    $.ajax({
    type: "method",
    url: "url",
    data: "data",
    dataType: "dataType",
    success: function (response) {
        
    }
});



  */

