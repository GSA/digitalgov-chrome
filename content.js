console.log('Hello :waves: from the DigitalGov Chrome Extension');

// Transforms URLs that start with https://www.digitalgov.gov/
// into a DEMO URL — https://demo.digitalgov.gov/
function get_demo_url(url){
  var d = "https://www.digitalgov.gov/";
  if (url.startsWith(d)) {
    var u = url.replace(d, "https://demo.digitalgov.gov/");
    return u;
  }
}

var url = window.location.href;               // gets the current URL
var pathname = window.location.pathname;      // gets the current pathname (URL minus the domain)


// This is the HTML for the top bar
// Inserts the DEMO URL and the pathname into the sentence
var bar = [
  "<div id='dg-editor-bar' class='notice'>",
    "<div class='notice-content'>",
      "<p class='notice-text'><span class='notice-text--primary'>This is the Sites version of DigitalGov.</span> Visit the Federalist page <a href='"+get_demo_url(url)+"' target='_blank'>"+pathname+"</a></p>",
    "</div>",
  "</div>"
].join("\n");

// prepends the bar within the <body> tag
jQuery('body').prepend(bar);
