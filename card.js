
function create_card(d){
  $('body').append("<div id='dg-card'>"+d+"</div>");
}


function c_action(text, id){
  var s = '<p id="'+id+'" class="msg"><span>' + text + '</span></p>';
  return s;
}
