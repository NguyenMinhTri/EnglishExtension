        chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
        	var result = "";
            if (request.name == "getCookies") {
				chrome.cookies.get({
					url: 'http://olympusenglish.azurewebsites.net/',
					name: 'extension_token'
				}, function(cookie) {
					if(cookie === null || cookie == null)
					{
						sendResponse("undefined");
					}
					else
					{
						sendResponse(cookie.value);
					}
				});       

            } else if (request.name == "runAudio") {
                new Audio(request.audio).play();
                console.log(sender);
                console.log(request);
                sendResponse(request.audio);
            }

        });