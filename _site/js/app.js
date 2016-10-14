var bg = $('.bg-icon'),
    count = 0;
width = $(document).width(),
    height = $(document).height(),
    w_height = $(window).height(),
    svg_list = ["icon-01.svg", "icon-02.svg", "icon-03.svg", "icon-04.svg", "icon-05.svg", "icon-06.svg", "icon-07.svg", "icon-08.svg", "icon-09.svg", "icon-10.svg", "icon-11.svg", "icon-12.svg"],
    max_icon = Math.floor(Math.pow(height, 0.5)),
    h_ratio = (height / w_height) * 100;
bg.height(h_ratio + "%");
for (var i = 0; i < max_icon; i++) {
    bg.append("<div class='icon'style='left: calc(" + rand_gen(100) + "% - 60px); top: " + rand_gen(h_ratio) + "%;background-image: url(../img/svg/" + svg_list[rand_gen(11)] + ");'></div>");
}
$(document).ready(function() {
    svg_display();
    bg_icon_move()
    animations_page();
    scrollknight.addclass($(".tip ul li"), 300, "active")
    scrollknight.peralax()
});

function bg_icon_move() {
    $(window).mousemove(function(event) {
        var x = event.pageX;
        var y = event.pageY;
        x = (((x / width) - 0.5) * 70)
        y = (((y / height) - 0.5) * 70)
        $(".dir1").css('transform', "translate(" + x + "px," + y + "px)");
        $(".dir2").css('transform', "translate(" + (x * -1) + "px," + (y * -1) + "px)");
    });
}

function rand_gen(val) {
    return Math.floor((Math.random() * val) + 1);
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
