// content.js
console.log('hi, GitHub Editor');

var hash = window.location.hash;
var pathname = window.location.pathname; // Returns path only
var url      = window.location.href;     // Returns full URL

var msg = 'hello';
var preview = '';

// Projects
if (pathname.indexOf("projects") !=-1) {
  console.log('projects');
  var msg = format_msg('This is a project');
}

// Single Pull Request
if (pathname.indexOf("pull/") !=-1) {
  var pull_api = 'https://api.github.com/repos' + pathname;
  var pull_api_path = pull_api.replace('pull', 'pulls');
  $.getJSON(pull_api_path, callbackFuncWithData);

  function callbackFuncWithData(data){
    console.log(data);
  }

  if( $('.State').length ){
    var state = $('.State').text();
  }
  if( $('.status-actions').length ){
    var preview_url = $('.status-actions').attr('href');
    var preview = format_preview(preview_url);
  };
  var msg = format_msg('This is a pull request');
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
  var s = '<p class="msg">' + d + '</p>';
  return s;
}

function format_preview(d){
  var s = '<p class="preview"><a href="'+d+'" title="Preview URL">Preview</a></p>';
  return s;
}

var dgcard = [
  msg,
  preview
].join("\n");
$('#dg-card').remove();
$('body').append("<div id='dg-card'>"+ dgcard +"</div>");
