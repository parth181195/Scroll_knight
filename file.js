function win_scroll(menu,val2,active_class,menu_height,menu_items,scroll_div,l_id){
  var dist = $(this).scrollTop() + menu_height + val2;
  var cur = scroll_div.map(function() {
      if ($(this).val2().top < dist)
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
