var bg = $('.bg-icon'),
    count = 0;
    width = $(document).width(),
    height = $(document).height(),
    w_height = $(window).height(),
    w_width = $(window).width(),
    svg_list = ["icon-01.svg", "icon-02.svg", "icon-03.svg", "icon-04.svg", "icon-05.svg", "icon-06.svg", "icon-07.svg", "icon-08.svg", "icon-09.svg", "icon-10.svg", "icon-11.svg", "icon-12.svg"],
    max_icon = 40,
    last_Pos = ($(".last").offset().top)-600,
    h_ratio = (height / w_height) * 100;
    w_ratio = (width / w_width) * 100;
bg.height(last_Pos + "px");
$(window).resize(function(event) {
  width = ($(document).width())+17
  bg_icon_move()
});
for (var i = 0; i < max_icon; i++) {
    bg.append("<div class='icon'style='left: calc(" + rand_range(25,75,100) + "% - 60px); top: " + rand_gen(h_ratio) + "%;background-image: url(../img/svg/" + svg_list[rand_gen(11)] + ");'></div>");
}
$(document).ready(function() {
    svg_display();
    bg_icon_move();
    animations_page();
    scrollknight.addclass($(".tip ul li"), 350, "active")
    scrollknight.peralax()
});
function bg_icon_move() {
  $(window).mousemove(function(event) {
  if (width > 800){
        var x = event.pageX;
        var y = event.pageY;
        x = (((x / width) - 0.5) * 70)
        y = (((y / height) - 0.5) * 70)
        $(".dir1").css('transform', "translate(" + x + "px," + y + "px)");
        $(".dir2").css('transform', "translate(" + (x * -1) + "px," + (y * -1) + "px)");
      }
    });
}
function rand_gen(val) {
    return Math.floor((Math.random() * val) + 1);
}
function rand_range(val1,val2,val3) {
    var bool = Math.floor((Math.random() * 2));
    if (bool == 1) {
      return Math.floor((Math.random() * val1) + 1);
    }
    else {
      return Math.floor((Math.random() * (val3-val2)) + val2);
    }
}
function svg_display() {
    bg.children('.icon:odd').addClass('dir1')
    bg.children('.icon:even').addClass('dir2')
    bg.children('.icon').css('display', 'block');
}

function animations_page() {
    var tl = new TimelineMax
    tl.from(".wrapper h1.head", 0.5, {
            top: "-500px",
        })
        .from(".wrapper h1.head", 0.5, {
            opacity: 0
        }, "=-0.3")
        .staggerTo(".tip ul li", 0.5, {
            transform: " translate(0,0) rotate(45deg)"
        }, 0.02, "=-0.6");
}
