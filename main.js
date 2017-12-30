
var Chrome = chrome;
// Add bubble to the top of the page.
var bubble = document.createElement('div');
bubble.setAttribute('class', 'bubble');
document.body.appendChild(bubble);

// Lets listen to mouseup DOM events.
document.addEventListener('mouseup', function (e) {
  var selection = window.getSelection().toString();
  if (selection.length > 0) {
    translateText(e.clientX-20, e.clientY+30, selection);
  }
}, false);

// Close the bubble when we click on the screen.
document.addEventListener('mousedown', function (e) {
  bubble.style.visibility = 'hidden';
}, false);

function translateText(mouseX, mouseY, selection) {
  var url = "https://uitenglishbot.herokuapp.com/dictionary?voca="  + selection
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
        if (/^[a-z\d\-_\s]+$/i.test(data.messages[0].text)) {
          renderBubble(mouseX, mouseY, "Translation not found.");
        } else {

          new Audio(data.messages[3].attachment.payload.url).play();
          renderBubble(mouseX, mouseY, data.messages[0].text+"<br/>"+data.messages[2].text+"<br/>"+data.messages[1].text);
        }
    })
    .catch(function(err) {
        console.error('An error ocurred', err);
    });
}

// Move that bubble to the appropriate location.
function renderBubble(mouseX, mouseY, selection) {
  bubble.innerHTML = selection;
  bubble.style.top = mouseY + 'px';
  bubble.style.left = mouseX + 'px';
  bubble.style.visibility = 'visible';
}
