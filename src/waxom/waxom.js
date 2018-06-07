import './waxom.scss';

let test = $('div.test');
for (let i = 0; i < test.length; i++)
    test.get(i).style.color = "red";

setTimeout("$('p.test').get(0).style.color = 'green'", 2000);


// $(".kek").append("<span> JUST TEXT</span>");
// $(".lolkek").appendTo($(".kek"));

// $(".topkek").appendTo($(".v2"));

$(".v2").css("border-bottom", "5px solid red");
$(".topkek").css("border-bottom", "5px solid red");


$(function () {
    $('.wrapper').hover(function () {
        $(this).children().stop().animate({marginTop: '100%', opacity: 0}, 100);
    }, function () {
        $(this).children().stop().animate({marginTop: '50%', opacity: 1}, 100);
    });
});