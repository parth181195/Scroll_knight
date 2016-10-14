var p = 0,
obj_array=[],
rate_array=[],
i_array=[]
var scrollknight
scrollknight = {
class : function (menu, offset, active_class) {
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
        TweenLite.to(window, 0.3, {
            scrollTo: scroll_dist
        });
    });
    $(window).scroll(function() {
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
    });
},

// peralax : function (object, rate) {
//   i_array[p]=p
//   obj_array[p]=object
//   rate_array[p]=rate
//   p=p+1
// peralaxknight(obj_array,rate_array)
// }
}
// function peralaxknight(objects, rates){
//   var act_rates=[]
//   $(window).scroll(function(event) {
//     act_rates = rates.map(function(element) {
//       var temp = ($(window).scrollTop()/element)
//       return temp;
//     })
//   $.each(i_array,function(){
//     $(objects[this]).css('transform', 'translate('+act_rates[this]+'px,0)');
//     // console.log(act_rates[this]);
//   })
//   });
// }
