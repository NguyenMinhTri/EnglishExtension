        chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
            var result = "";
            if (request.name == "soundSetting") {
                chrome.cookies.get({
                    url: 'https://uitenglishbot.herokuapp.com/',
                    name: 'sound_setting'
                }, function(cookie) {
                    if (cookie === null || cookie == null) {
                        sendResponse("ON");
                    } else {
                        sendResponse(cookie.value);
                    }
                });

            } else if (request.name == "runAudio") {
                new Audio(request.audio).play();
                console.log(sender);
                console.log(request);
                sendResponse(request.audio);
            } else if(request.name == "getAllCookies")
            {
                chrome.cookies.getAll({ url: "http://olympusenglish.azurewebsites.net" }, function(cookies) {
                    var tempCookieValue = '';
                    for (var i = 0; i < cookies.length; i++) {
                        tempCookieValue += cookies[i].name + '=' + cookies[i].value + '; ';
                    }
                    sendResponse(tempCookieValue);
                });
            }

        });