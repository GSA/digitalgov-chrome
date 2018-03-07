// content.js
console.log('hi, GitHub Editor');

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

  $.getJSON( pull_api_path, function( data ) {
    console.log('data');
    console.log(data);

    var assignees = data['assignees'];
    var branch = data['head']['ref'];
    var preview_url = 'https://federalist-proxy.app.cloud.gov/preview/gsa/digitalgov.gov/'+branch+'/';

    if( $('.status-actions').length ){
      var prev = $('.status-actions').attr('href');
      if (prev.indexOf("/logs") >= 0) {
        console.log('NOT Built yet');
        console.log(prev);
        var msg = "preview (building...)";
        var preview = format_preview(preview_url, msg);
      } else {
        console.log(preview_url);
        var msg = "preview";
        var preview = format_preview(preview_url, msg);
      }
    };

    var msg = format_msg('This is a pull request');

    var dgcard = [
      msg,
      preview
    ].join("\n");
    $('#dg-card').remove();
    $('body').append("<div id='dg-card'>"+ dgcard +"</div>");

  });

}

function format_preview(d, msg){
  var s = '<p class="preview"><a target="_new" href="'+d+'" title="Preview URL">'+msg+'</a></p>';
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



function format_todo(d){

  var todo = [
    'todo:',
    '<ul>',
    '<li><span>x</span> add assignees</li>',
    '<li><span>x</span> add a reviewer</li>',
    '<li><span>x</span> add a longer summary/li>',
    '</ul>'
  ].join("\n");
  return todo;
}
