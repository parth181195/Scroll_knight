var p = 0,
    obj_array = [],
    rate_array = [],
    i_array = [],
    peralax_call = 0,
    scrollknight;
scrollknight = {
    peralax: function() {
        peralax_call = 1
    },
    scroll: function(menu, offset, active_class) {
        var l_id,
            menu_height = menu.height(),
            menu_items = menu.find("a");
        scroll_div = menu_items.map(function() {
            var item = $($(this).attr("href"));
            if (item.length) {
                return item;
            }
        });
        menu.click(function(event) {
            /* Act on the event */
            event.preventDefault()
            var scroll = $(this).children('a').attr('href');
            var scroll_dist = ($(scroll).offset().top) - offset
                //  $(window).scroll(scroll_dist)
            TweenMax.to(window, 0.3, {
                scrollTo: scroll_dist
            });
        });
        peralaxknight();

        function anim() {
            $(window).scroll(function() {
                window.requestAnimationFrame(anim)
                win_scroll(offset, active_class, menu_height, menu_items, scroll_div, l_id)
                if (peralax_call = !0) {
                    peralax_divs.map(function(elem) {
                        TweenMax.set(this, {
                            transform: "translate" + peralax_dir[elem] + "(" + $(window).scrollTop() / peralax_rate[elem] + 'px)'
                        });
                    })
                    $(this).unbind(event)
                }
            });
        }
        window.requestAnimationFrame(anim)
    },
}

function peralaxknight() {
    peralax_divs = $(document).find(".peralax");
    peralax_rate = peralax_divs.map(function(elem) {
        var data = $(this).attr('data-peralax-rate');
        if (data == undefined) {
            data = 1.5
        }
        return data;
    })
    peralax_dir = peralax_divs.map(function(elem) {
        var data = $(this).attr('data-peralax-dir').toUpperCase();
        if (data == undefined) {
            throw "----> No direction found on peralax_div number----> " + (elem + 1);
        } else if (data != "X" && data != "Y") {
            throw "----> No velid direction found on peralax_div number----> " + (elem + 1);
        }
        return data;
    })
}

function win_scroll(offset, active_class, menu_height, menu_items, scroll_div, l_id) {
    var dist = $(this).scrollTop() + menu_height + offset;
    var cur = scroll_div.map(function() {
        if ($(this).offset().top < dist)
            return this;
    });
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";
    if (l_id !== id) {
        l_id = id;
        menu_items
            .parent().removeClass(active_class)
            .end().filter("[href='#" + id + "']").parent().addClass(active_class);
    }
}
