// content.js
console.log('hi, GitHub');

var hash = window.location.hash;
var pathname = window.location.pathname; // Returns path only
var url      = window.location.href;     // Returns full URL

var msg = 'hello';
var preview = '';
var todo = '';

// Projects
if (pathname.indexOf("projects") !=-1) {
  console.log('projects');
  var msg = format_msg('This is a project');
}

// Single Pull Request
if (pathname.indexOf("pull/") !=-1) {
  var pull_api = 'https://api.github.com/repos' + pathname;
  var pull_api_path = pull_api.replace('pull', 'pulls');
  console.log(pull_api_path);
  var pull_status = get_pull_status();

  var gdata = $.getJSON(pull_api_path, function( data ) {
    console.log('GitHub Pull Object');
    console.log(data);
  }).done(function(data) {
    build_card(data, pull_status);
  });
}


setTimeout(function(){
  console.log('status');
  var pull_status = get_pull_status();
  if (pull_status == 'building') {
    build_card(data, pull_status);
  } else {
    var msg = "preview";
  }
}, 1000);


function build_card(data, pull_status){
  var repo = data['base']['repo']['full_name'];
  var assignees = data['assignees'];
  var branch = data['head']['ref'];
  var preview_url = get_preview_url(repo, branch);

  var preview_btn = format_preview(preview_url, pull_status);
  var dgcard = [
    preview_btn
  ].join("\n");
  $('#dg-card').remove();
  $('body').append("<div id='dg-card'>"+ dgcard +"</div>");
}


// Builds and returns the Federalist Preview URL
function get_preview_url(repo, branch){
  return 'https://federalist-proxy.app.cloud.gov/preview/'+repo.toLowerCase()+'/'+branch+'/';
}

// We are finding the Federalist status-actions link on the page, and if there is a `/logs` in the href, it cites this as "building" or not ready to preview.
function get_pull_status(){
  if( $('.status-actions').length ){
    var prev = $('.status-actions').attr('href');
    if (prev.indexOf("/logs") >= 0) {
      var status = "building";
    } else {
      var status = "done";
    }
    return status;
  };
}

function format_preview(url, status){
  if (status == 'building') {
    var msg = "preview (building...)";
  } else {
    var msg = "preview";
  }
  var s = '<p class="preview"><a target="_new" href="'+url+'" title="Preview URL">'+msg+'</a></p>';
  return s;
}

// All Pull Requests
if (pathname.indexOf("pulls") !=-1) {
  console.log('pulls');
  var msg = format_msg('These are your pull requests');
}

// Single Issue
if (pathname.indexOf("issues") !=-1) {
  console.log('issues');
  var msg = format_msg('This is an issue');
}

function format_msg(d){
  var s = '<p class="msg"><span>' + d + '</span></p>';
  return s;
}
