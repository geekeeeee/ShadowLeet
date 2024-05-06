$(function(){
  chrome.storage.sync.get('toggle', function(data){
    var toggle = data.toggle;
    if(toggle)
      $('#toggle').text('Light Mode');
    else
      $('#toggle').text('Dark Mode');
  });

  $('#toggle').click(function(){
    chrome.storage.sync.get('toggle', function(data){
      var toggle = data.toggle;
      var newToggle = !toggle;

      chrome.storage.sync.set({'toggle': newToggle});

      if(newToggle)
        $('#toggle').text('Light Mode');
      else
        $('#toggle').text('Dark Mode');
    });
  });
});
