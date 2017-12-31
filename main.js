var Chrome = chrome;
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
    var url = "https://uitenglishbot.herokuapp.com/dictionary?voca=" + selection
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            if (/^[a-z\d\-_\s]+$/i.test(data.messages[0].text)) {
                renderBubble(mouseX, mouseY, "Không tìm thấy từ!");
            } else {
                new Audio(data.messages[3].attachment.payload.url).play();
                renderBubble(mouseX, mouseY, "<div><span class='pron'>" + data.messages[0].text + "</span><br/>" + data.messages[2].text + "<br/>" + jsUcfirst(data.messages[1].text) + "</div><button class='saveWord'></button>", selection);
            }
        })
        .catch(function(err) {
            console.error('Có lỗi xảy ra!', err);
        });
}

// Move that bubble to the appropriate location.
function renderBubble(mouseX, mouseY, selection, voca) {
    var url = "https://uitenglishbot.herokuapp.com/saveword?voca="+ voca;
    var temp = "fetch("+'"'+url+'"'+").then(function(response) {return response.json();});"
    var temp2= "alert('"+temp+"');" 
    if (!bubble.classList.contains('hidden')) {
        bubble.innerHTML = selection;
        bubble.style.top = mouseY + 'px';
        bubble.style.left = mouseX + 'px';
        bubble.style.visibility = 'visible';
        eval(""
             +"document.getElementsByClassName('saveWord')[0].addEventListener('click',function(event){"
             +temp 
             +"document.getElementsByClassName('bubble')[0].classList.add('hidden');" 
             +"});"
        );
    }
    else{
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