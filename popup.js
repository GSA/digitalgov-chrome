function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, (tabs) => {
    var tab = tabs[0];
    var url = tab.url;
    console.assert(typeof url == 'string', 'tab.url should be a string');
    callback(url);
  });
}

document.addEventListener('DOMContentLoaded', () => {

  // Creates the DEMO URL from the main URL.
  function get_demo_url(url){
    var d = "https://www.digitalgov.gov/";
    if (url.startsWith(d)) {
      var u = url.replace(d, "https://demo.digitalgov.gov/");
      return u;
    }
    return 'nope';
  }

  getCurrentTabUrl((url) => {
    var dropdown = document.getElementById('dropdown');

    var demo_url = get_demo_url(url);
    var demo = document.getElementById('demo_url');
    demo.href = demo_url;
    demo.onclick = function () {
      chrome.tabs.create({active: true, url: demo_url});
    };
  });
});
