// digitalgov.js
// console.log('hi, Government site');

// var len = $('script[src="https://dap.digitalgov.gov/Universal-Federated-Analytics-Min.js?ver=true&agency=GSA"]').length;
var len = $( "script[src^='https://dap.digitalgov.gov']" ).length;
console.log(len);

// var keyword = "dap.digitalgov.gov";
// $("#preload img").filter(function(keyword) {
//     return $(this).attr("src").toLowerCase().indexOf(keyword.toLowerCase()) != -1;
// });

// https://dap.digitalgov.gov/Universal-Federated-Analytics-Min.js?ver=true&agency=GSA



create_card(c_action('page-details', 'c_show_page_details'));

$("#c_show_page_details").click(function(e) {
  e.preventDefault();
  show_page_details();
  $(this).toggleClass('active');
});

function show_page_details() {
  $('.page-details').toggle();
}
