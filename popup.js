$(function(){
  chrome.storage.sync.get('toggle', function(toggle){
    if(toggle)$('#toggle').text = 'Light Mode';
    else $('#toggle').text = 'Dark Mode';
  })
  $('#toggle').click(function(){
    chrome.storage.sync.get('toggle', function(toggle){
      var newToggle; 
      if(toggle == true)newToggle = false; 
      newToggle = true;

      chrome.storage.sync.set(newToggle);

      if(newToggle)$('#toggle').text( 'Light Mode');
      else $('#toggle').text('Light Mode');


    })
  })
})