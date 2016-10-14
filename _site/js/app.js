// var bg = $(".bg-icon"),
//     width = $(document).width(),
//     height = $(document).height(),
//     yratio = ((height / $(window).height()) * 100),
//     rand = [],
//     svg_list = [],
//     number = Math.floor(Math.pow(height, 0.65));
//
// for (var i = 0; i < number; i++) {
//     var temp = rand_gen(12)
//     if (temp < 10) {
//         svg_list[i] = "icon-0" + temp + ".svg"
//     } else {
//         svg_list[i] = "icon-" + temp + ".svg"
//     }
//     bg.append("<div class='icon normal'style='left: calc(" + rand_gen(100) + "% - 60px); top: " + rand_gen(yratio) + "%;background-image: url(../img/svg/" + svg_list[i] + ");'></div>");
// }
// var icons = bg.children(".icon");
// for (var k = 0; k < (number / 2); k++) {
//     rand[k] = rand_gen(number);
//     var icon = icons[rand[k]]
//     $(icon).addClass('invert').removeClass('normal')
// }
//
// $(document).ready(function() {
//     bg.css("height", yratio + "%")
//     $(".icon").css('display', 'block');
//     scrollknight.class($(".tip ul li"), 300, "active")
//     $(function() {
//         var tl = new TimelineMax
//         tl.from(".wrapper h1.head", 0.5, {
//                 top: "-500px",
//             })
//             .from(".wrapper h1.head", 0.5, {
//                 opacity: 0
//             }, "=-0.3")
//             .staggerTo(".tip ul li", 0.5, {
//                 transform: " translate(0,0) rotate(45deg)"
//             }, 0.02, "=-0.6");
//     })
// });
// $(window).mousemove(function(event) {
//     var x = event.pageX;
//     var y = event.pageY;
//     x = (((x / width) - 0.5) * 70)
//     y = (((y / height) - 0.5) * 70)
//     $(".normal").css('transform', "translate(" + x + "px," + y + "px)");
//     $(".invert").css('transform', "translate(" + (x * -1) + "px," + (y * -1) + "px)");
// });
var bg = $('.bg-icon'),
    count = 0;
    width = $(document).width(),
    height = $(document).height(),
    w_height = $(window).height(),
    class_array = ["normal","invert"],
    svg_list = ["icon-01.svg","icon-02.svg","icon-03.svg","icon-04.svg","icon-05.svg","icon-06.svg","icon-07.svg","icon-08.svg","icon-09.svg","icon-10.svg","icon-11.svg","icon-12.svg"],
    max_icon = Math.floor(Math.pow(height, 0.62)),
    h_ratio =(height/w_height)*100;
    bg.height(h_ratio+"%");
for (var i = 0; i < max_icon; i++) {
       bg.append("<div class='icon "+class_array[rand_gen(1)]+"'style='left: calc(" + rand_gen(100) + "% - 60px); top: " + rand_gen(h_ratio) + "%;background-image: url(../img/svg/" + svg_list[rand_gen(11)] + ");'></div>");
}
$(document).ready(function() {
  svg_display();
  bg_icon_move();
});
function bg_icon_move(){
  
}
function rand_gen(val) {
    return Math.floor((Math.random() * val) + 1);
}
function svg_display() {
    bg.children('.icon').css('display', 'block');
}
