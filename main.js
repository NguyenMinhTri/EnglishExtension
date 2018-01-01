var token_user = "";
// Add bubble to the top of the page.
var bubble = document.createElement('div');
bubble.setAttribute('class', 'bubble');
document.body.appendChild(bubble);

// Lets listen to mouseup DOM events.
document.addEventListener('mouseup', function(e) {
    var selection = window.getSelection().toString();
    if (selection.length > 0) {
        translateText(e.clientX - 20, e.clientY + 30, selection);
    }
}, false);

// Close the bubble when we click on the screen.
document.addEventListener('mousedown', function(e) {
    bubble.style.visibility = 'hidden';
}, false);

function translateText(mouseX, mouseY, selection) {
    chrome.extension.sendRequest({ name: "getCookies", audio: "" }, function(responseCookie) {
        //console.log(response);
        // localStorage.setItem("cookies",response);
        if(typeof(responseCookie) === "undefined")
        {
          alert("Vui lòng nhập token");
          return;
        }
        var url = "https://uitenglishbot.herokuapp.com/dictionary?voca=" + selection +"&userid="+responseCookie;
        fetch(url)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                if (/^[a-z\d\-_\s]+$/i.test(data.messages[0].text)) {
                    renderBubble(mouseX, mouseY, "Không tìm thấy từ!");
                } else {
                    chrome.extension.sendRequest({ name: "runAudio", audio: data.messages[3].attachment.payload.url }, function(response) {
                        console.log(response);
                        //localStorage.setItem("cookies",response);
                    });
                    // new Audio(data.messages[3].attachment.payload.url).play();
                    if(data.Selected == false)
                    {
                      renderBubble(mouseX, mouseY, "<div><span class='pron'>" + data.messages[0].text + "</span><br/>" + data.messages[2].text + "<br/>" + jsUcfirst(data.messages[1].text) + "</div><button class='saveWord'></button>", selection, responseCookie);
                    }
                    else
                    {
                      renderBubble(mouseX, mouseY, "<div><span class='pron'>" + data.messages[0].text + "</span><br/>" + data.messages[2].text + "<br/>" + jsUcfirst(data.messages[1].text) + "</div><button class='saveWord selected'></button>", selection, responseCookie);
                    }
                }
            })
            .catch(function(err) {
                console.error('Có lỗi xảy ra!', err);
            });
    });
}

// Move that bubble to the appropriate location.
function renderBubble(mouseX, mouseY, selection, voca, userid) {

    var url = "https://uitenglishbot.herokuapp.com/saveword?voca=" + voca+"&userid="+ userid;
    var temp = "fetch(" + '"' + url + '"' + ").then(function(response) {return response.json();});"
    var temp2 = "alert('" + temp + "');"
    if (!bubble.classList.contains('hidden')) {
        bubble.innerHTML = selection;
        bubble.style.top = mouseY + 'px';
        bubble.style.left = mouseX + 'px';
        bubble.style.visibility = 'visible';
        eval("" +
            "document.getElementsByClassName('saveWord')[0].addEventListener('click',function(event){" +
            temp +
            "document.getElementsByClassName('bubble')[0].classList.add('hidden');" +
            "});"
        );
    } else {
        bubble.classList.remove('hidden');
    }
}

function jsUcfirst(string) {
    if (string != null) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } else {
        return "";
    }
}

function save() {
    alert("ok");
}