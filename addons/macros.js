remark.macros['abs'] = function(width="30%", left="85%", top="15%", cl="") {
  var url = this;
  return '<img src="' + url + '" style="position:absolute;left:' + left + ';top:' + top + ';width:' + width + '" class="' + cl + '" />';
  };
