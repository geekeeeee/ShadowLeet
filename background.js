chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if(request.todo == "showPageAction"){
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            if(tabs && tabs.length()>0)chrome.pageAction.show(tabs[0].id);
            else console.error("no tabs foud")
        })
    }
})