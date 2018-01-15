
//
chrome.cookies.set({
    url: 'https://uitenglishbot.herokuapp.com/',
    name: "duplicate",
    value: "temp"
});
var tempTime = Date.now();
var urlSound = "https://translate.googleapis.com/translate_tts?client=gtx&ie=UTF-8&tl=vi&tk=775040.775040&q=";
var urlSoundEn = "https://translate.googleapis.com/translate_tts?client=gtx&ie=UTF-8&tl=en&tk=775040.775040&q=";
function playVoca(url) {
    return new Promise(function (resolve, reject) { // return a promise
        if(tempTime < ( Date.now() - 300))
        {
            var audio = new Audio();                     // create audio wo/ src
            audio.preload = "auto";                      // intend to play through
            audio.autoplay = true;                       // autoplay when loaded
            audio.onerror = reject;                      // on error, reject
            audio.onended = resolve;                     // when done, resolve
            audio.src = url
            tempTime = Date.now();
        }
    });
}
chrome.extension.onRequest.addListener(function (request, sender, sendResponse) {
    var result = "";
    if (request.name == "soundSetting") {
        chrome.cookies.get({
            url: 'https://uitenglishbot.herokuapp.com/',
            name: 'sound_setting'
        }, function (cookie) {
            if (cookie === null || cookie == null) {
                sendResponse("ON");
            } else {
                sendResponse(cookie.value);
            }
        });

    } else if (request.name == "runAudio") {
        playVoca(request.audio).then(function () {
            sendResponse(Date.now());
        });
    }
    else if (request.name == "runGoogleAudio") {
        playVoca(urlSoundEn + request.audio).then(function () {
            sendResponse(Date.now());
        });
    } else if (request.name == "getAllCookies") {
        chrome.cookies.getAll({ url: "http://olympusenglish.azurewebsites.net" }, function (cookies) {
            var tempCookieValue = '';
            for (var i = 0; i < cookies.length; i++) {
                tempCookieValue += cookies[i].name + '=' + cookies[i].value + '; ';
            }
            sendResponse(tempCookieValue);
        });
    } else if(request.name == "determineDuplicate") {
        chrome.cookies.get({
            url: 'https://uitenglishbot.herokuapp.com/',
            name: 'duplicate'
        }, function (cookie) {
            if (cookie === null || cookie == null) {
                sendResponse("");
            } else {
                sendResponse(cookie.value);
            }
        });
    } else if(request.name == "setCookieDuplicate") {
        chrome.cookies.set({
            url: 'https://uitenglishbot.herokuapp.com/',
            name: "duplicate",
            value: request.audio
        });
    }  
    
    else if (request.name == "getDictToExtension") {

        var url = "http://olympusenglish.azurewebsites.net/Dictionary/getDictToExtension?contain=" + request.audio;
        fetch(url, {
            credentials: 'include'
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                sendResponse(data);
                //}
            })
            .catch(function (err) {
                console.log('Có lỗi xảy ra!', err);
            });

    } else if (request.name == "verifyToken") {
        var url = "http://olympusenglish.azurewebsites.net/Dictionary/verifyToken";
        fetch(url, {
            credentials: 'include'
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                sendResponse(data);
                //}
            })
            .catch(function (err) {
                console.log('Có lỗi xảy ra!', err);
            });
    }

});
document.addEventListener('DOMContentLoaded', function () {
    // var urlSound = "https://translate.googleapis.com/translate_tts?client=gtx&ie=UTF-8&tl=vi&tk=775040.775040&q="
    // chrome.tabs.onUpdated.addListener(checkForValidUrl);
    //  new Audio("https://translate.googleapis.com/translate_tts?client=gtx&ie=UTF-8&tl=vi&tk=775040.775040&q=Tr%E1%BB%9Di%20m%C3%A1").play();
    //chrome.pageAction.onClicked.addListener(onClickListener); //might need to put this here, it's been a while since I've done a chrome extension, but if you do then just put your conditional for the regex in your onClickListener function
    chrome.cookies.getAll({ url: "http://olympusenglish.azurewebsites.net" }, function (cookies) {
        var tempCookieValue = '';
        var checkLoading = false;
        chrome.cookies.set({
            url: 'https://uitenglishbot.herokuapp.com/',
            name: '.AspNet.ApplicationCookie',
            value: ''
        });
        for (var i = 0; i < cookies.length; i++) {
            tempCookieValue += cookies[i].name + '=' + cookies[i].value + '; ';
            chrome.cookies.set({
                url: 'https://uitenglishbot.herokuapp.com/',
                name: cookies[i].name,
                value: cookies[i].value,
                expirationDate: cookies[i].expirationDate
            });
            if (cookies[i].name == '.AspNet.ApplicationCookie') {
                checkLoading = true;
            }
        }
        if (checkLoading == false) {
           // new Audio(urlSound + "Hình như bạn chưa đăng nhập vào Olympus").play();
        } else {
            fetch("https://uitenglishbot.herokuapp.com/verifyToken", {
                credentials: 'include'
            })
                .then(function (response) {
                    try {
                        return response.json();
                    } catch (err) {
                        return null;
                    }
                })
                .then(function (data) {
                    if (data.text === null || data.text == null) {
                        //    new Audio(urlSound + "Hình như bạn chưa đăng nhập vào Olympus").play();
                    } else {
                        //   new Audio(urlSound + "Xin chào bạn" + data.text).play();
                    }
                });
        }

    });

});

// Called when the url of a tab changes.
function checkForValidUrl(tabId, changeInfo, tab) {
    // Show action only for wikipedia pages
    // var regex = /wikipedia.org/gi;
    // if (tab.url.match(regex)) {
    chrome.pageAction.show(tabId);
    chrome.pageAction.onClicked.addListener(onClickListener);
    // }
};

function onClickListener(tab) {
    alert('Clicked!!!');
}




$.connection.hub.url = "http://olympusenglish.azurewebsites.net/signalR";
//$.connection.hub.url = "http://localhost:20000/signalR";
var notification = $.connection.notificationHub;

$.connection.hub.start().
    done(function () { console.log('Now connected, connection ID='); })
    .fail(function () { console.log('Could not connect'); });

notification.client.receiveMessage = function (msg) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, msg, function (response) { 
         });
    });
};

notification.client.updateUsersOnlineCount = function (count) {
    chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 255] });
    chrome.browserAction.setBadgeText({text: count.toString()});
};
