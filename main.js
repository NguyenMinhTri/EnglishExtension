var token_user = "";
var allCookies = "";
// Add bubble to the top of the page.
var bubble = document.createElement('div');
bubble.setAttribute('class', 'bubble');
document.body.appendChild(bubble);

// Lets listen to mouseup DOM events.
document.addEventListener('mouseup', function(e) {
    var target = e.target.closest(".bubble button");
    if (target==null){
        var selection = window.getSelection().toString();
        if (selection.length > 0) {
            translateText(e.clientX - 20, e.clientY + 30, selection);
        }
    }
}, false);

// Close the bubble when we click on the screen.
document.addEventListener('mousedown', function(e) {
    var target = e.target.closest("div.bubble");
    if (target==null){
        bubble.style.visibility="hidden";
        if (document.getElementsByClassName('saveWord').length != 0){
            document.getElementsByClassName('saveWord')[0].style.display = "none";
        } 
        if (document.getElementsByClassName('voice').length != 0){
            document.getElementsByClassName('voice')[0].style.display = "none";
        } 
    }
}, false);

function translateText(mouseX, mouseY, selection) {
    chrome.extension.sendRequest({ name: "getAllCookies", audio: "" }, function(responseAllCookies) {
        allCookies = responseAllCookies;
        console.log(responseAllCookies);
        const opts = {
            credentials: 'include',
            headers: {
                cookie: allCookies
            }
        }
        fetch("https://uitenglishbot.herokuapp.com/verifyToken", opts)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
                // Handle response you get from the server
            });

        // localStorage.setItem("cookies",response);
        var url = "https://uitenglishbot.herokuapp.com/dictionary?voca=" + selection;
        fetch(url, {
            credentials: 'include',
            Cookie: allCookies
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
               // if (/^[a-z\d\-_\s]+$/i.test(data.messages[1].text)) {
               //     console.log(data.messages[1].text);
               //     renderBubble(mouseX, mouseY, "Không tìm thấy từ!");
               // } 
               // else {
                chrome.extension.sendRequest({ name: "runAudio", audio: data.messages[3].attachment.payload.url }, function(response) {
                    console.log(response);
                        //localStorage.setItem("cookies",response);
                    });

                if (data.messages[0].text == null){
                    renderBubble(mouseX, mouseY, "<div>" + jsUcfirst(data.messages[2].text) + "</div>", selection);
                }
                else{
                    if (data.Selected == false) {
                        renderBubble(mouseX, mouseY, "<div><div class='pron'><span>" + data.messages[0].text + "</span><button class='voice'></button></div>" + data.messages[2].text + "<br/>" + jsUcfirst(data.messages[1].text) + "</div><button class='saveWord'></button>", selection, data.messages[3].attachment.payload.url);
                    } else {
                        renderBubble(mouseX, mouseY, "<div><div class='pron'><span>" + data.messages[0].text + "</span><button class='voice'></button></div>" + data.messages[2].text + "<br/>" + jsUcfirst(data.messages[1].text) + "</div><button class='saveWord selected'></button>", selection, data.messages[3].attachment.payload.url);
                    }
                }

                //}
            })
        .catch(function(err) {
            console.log('Có lỗi xảy ra!', err);
        });
    });
}

// Move that bubble to the appropriate location.
function renderBubble(mouseX, mouseY, selection, voca, audio) {
    var url = "https://uitenglishbot.herokuapp.com/saveword?voca=" + voca;
    var saveword = "fetch(" + '"' + url + '"' + "," + "{credentials:'include',Cookie:" + '"' + allCookies + '"' + "}" + ").then(function(response) {return response.json();});"
    var voice = "new Audio('"+audio+"').play()";
    if (!bubble.classList.contains('hidden')) {
        bubble.innerHTML = selection;
        bubble.style.top = mouseY + 'px';
        bubble.style.left = mouseX + 'px';
        bubble.style.visibility = 'visible';
        eval("" +
            "document.getElementsByClassName('saveWord')[0].addEventListener('click',function(event){" +
            saveword +
            "if (document.getElementsByClassName('saveWord')[0].classList.contains('selected')){this.classList.remove('selected')}else{this.classList.add('selected')}" +
            "});" + 
            "document.getElementsByClassName('voice')[0].addEventListener('click',function(event){" +
            voice +
            "});"
            );
    } else {
        bubble.classList.remove('hidden');
    }
}

function jsUcfirst(string) {
    if (string != null) {
        return string.charAt(0).toUpperCase() + string.slice(1).substring(0, string.length - 3);
    } else {
        return "";
    }
}
