



        chrome.tabs.query({url:"*://www.youtube.com/*"},function(tabs)
        {
          
            

                
                var playpause=document.getElementById("play");

               var next=document.getElementById("next");

            
                tabs.forEach(function(tab)
                {   
                    title=tab.title;
                            
                    function check_play() {
                        chrome.tabs.sendMessage(tab.id,{message:"toggle_play"},function(response)
                        {
    
                            if(response.state===false)
                            {
                                playpause.innerHTML="Pause";
    
    
                            }
                            else
                            {
    
                                playpause.innerHTML="Play";
                            }
    
    
                        });
                    }
                        function check_next()
                        {



                            chrome.tabs.sendMessage(tab.id,{message:"toggle_next"},function(response)
                            {

                                console.log(response.next);




                            });
                        }


                        



                        
    
                        playpause.addEventListener('click',check_play);


                        next.addEventListener('click',check_next);
                        










                });





        });

  
           
        var windowId;
        chrome.webNavigation.onCommitted.addListener(function(tabId){
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    var re = /www\.youtube\.com/;
    if (re.test(tab.url) && changeInfo.title) {
      document.getElementById("name").textContent = changeInfo.title;
      chrome.storage.local.set({key: changeInfo.title}, function() {
        console.log('Value is set to ' + value);
      });
      windowId=tab.windowId;
      console.log(windowId);
      
    }
  });
});

  chrome.storage.local.get(['key'], function(result) {
    document.getElementById("name").textContent = result.key;
  });
  












