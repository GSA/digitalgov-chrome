jQuery(document).ready(function($) {
  console.log('yep');
  chrome.tabs.getSelected(null, function(tab) {
    console.log(tab.url);
    var t0 = performance.now();
    console.log(t0);

    function showPaintTimings() {
      if (window.performance) {
        let performance = window.performance;
        let performanceEntries = performance.getEntriesByType('paint');
        performanceEntries.forEach( (performanceEntry, i, entries) => {
          console.log("The time to " + performanceEntry.name + " was " + performanceEntry.startTime + " milliseconds.");
        });
      } else {
        console.log('Performance timing isn\'t supported.');
      }
    }
    showPaintTimings();

  });
});


document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {
    console.log('yo');
    console.log(checkPageButton);
    chrome.tabs.getSelected(null, function(tab) {
      d = document;
      console.log(d);
      var f = d.createElement('form');
      f.action = 'http://gtmetrix.com/analyze.html?bm';
      f.method = 'post';
      var i = d.createElement('input');
      i.type = 'hidden';
      i.name = 'url';
      i.value = tab.url;
      f.appendChild(i);
      d.body.appendChild(f);
      console.log(f);
      f.submit();
    });
  }, false);
}, false);
