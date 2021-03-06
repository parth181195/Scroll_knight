var bg = $('.bg-icon'),
    count = 0;
width = $(document).width(),
    height = $(document).height(),
    w_height = $(window).height(),
    w_width = $(window).width(),
    svg_list = ["icon-01.svg", "icon-02.svg", "icon-03.svg", "icon-04.svg", "icon-05.svg", "icon-06.svg", "icon-07.svg", "icon-08.svg", "icon-09.svg", "icon-10.svg", "icon-11.svg", "icon-12.svg"],
    max_icon = 40,
    last_Pos = ($(".last").offset().top) - 600,
    h_ratio = (height / w_height) * 100;
w_ratio = (width / w_width) * 100;
bg.height(last_Pos + "px");
$(window).resize(function(event) {
    width = ($(document).width()) + 17
    bg_icon_move()
});
for (var i = 0; i < max_icon; i++) {
    bg.append("<div class='icon'style='left: calc(" + rand_range(25, 75, 100) + "% - 60px); top: " + rand_gen(h_ratio) + "%;background-image: url(../img/svg/" + svg_list[rand_gen(11)] + ");'></div>");
}
$(document).ready(function() {
    window.requestAnimationFrame(bg_icon_move)
    scrollknight.scroll($(".tip ul li"), 300, "active")
    scrollknight.peralax()
    animations_page();
});

function bg_icon_move() {
    $(window).mousemove(function(event) {
        if (width > 800) {
            window.requestAnimationFrame(bg_icon_move)
            var x = event.pageX;
            var y = event.pageY;
            x = (((x / width) - 0.5) * 90)
            y = (((y / height) - 0.5) * 90)
            // TweenMax.to(".dir1", 0.05, {
            //     transform: "translate(" + x + "px," + y + "px)"
            // })
            // TweenMax.to(".dir2", 0.05, {
            //         transform: "translate(" + (x * -1) + "px," + (y * -1) + "px)"
            //     })
                  $(".dir1").css('transform', "translate(" + x + "px," + y + "px)");
                  $(".dir2").css('transform', "translate(" + (x * -1) + "px," + (y * -1) + "px)");
            $(this).unbind(event);
        }
    });
}

function rand_gen(val) {
    return Math.floor((Math.random() * val) + 1);
}

function rand_range(val1, val2, val3) {
    var bool = Math.floor((Math.random() * 2));
    if (bool == 1) {
        return Math.floor((Math.random() * val1) + 1);
    } else {
        return Math.floor((Math.random() * (val3 - val2)) + val2);
    }
}

function svg_display() {
    TweenMax.set(".icon", {
        opacity: 0
    });
    bg.children('.icon:odd').addClass('dir1')
    bg.children('.icon:even').addClass('dir2')
    bg.children('.icon').css('display', 'block');
}

function animations_page() {
    svg_display();
    var tl = new TimelineMax
    tl.from("h1.head", 0.5, {
            transform: "translate(0,-500px)"
        })
        .from("h1.head", 0.5, {
            opacity: 0
        }, "=-0.3")
        .from("#one .pain", 0.5, {
            transform: " translate(0,600px)"
        }, "=-0.3")
        .from("#one .pain", 0.5, {
            opacity: 0
        }, "=-0.1")
        .from("#one .forget", 0.5, {
            opacity: 0,
            transform: " translate(600px,0)"
        }, "=-0.3")
        .staggerTo(".tip ul li", 0.5, {
            transform: " translate(0,0) rotate(45deg)"
        }, 0.02, "=-0.6")
        .to(".icon", 1, {
            opacity: 1
        });
}
