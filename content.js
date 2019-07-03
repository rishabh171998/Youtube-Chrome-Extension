        

               chrome.runtime.onMessage.addListener (
                function(request, sender, sendResponse) 
                {
                    var video=document.getElementsByTagName("video")[0];
                        var nextButton=document.getElementsByClassName("ytp-next-button")[0];
                        var prevButton=document.getElementsByClassName("ytp-prev-button")[0];
                    if(request.message==="toggle_play")
                    {
                            if(video.paused)
                            {
                                video.play();
                                sendResponse({state:true});


                            }
                            else{
                                video.pause();
                                sendResponse({state:false});



                            }

                        
                    }

                    if(request.message==="toggle_next")
                    {
                        if(nextButton)
                        {

                            nextButton.click();
                            sendResponse({next:true});
                        }


                    }
                    
                    



                });