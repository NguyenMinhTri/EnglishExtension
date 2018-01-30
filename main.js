var token_user = "";
var allCookies = "";
// Add bubble to the top of the page.
var bubble = document.createElement('div');
bubble.setAttribute('class', 'bubble');
document.body.appendChild(bubble);

// Lets listen to mouseup DOM events.
document.addEventListener('mouseup', function (e) {
	var target = e.target.closest(".bubble button");
	if (target == null) {
		var selection = window.getSelection().toString();
		if (selection.length > 0) {
			translateText(e.clientX - 20, e.clientY + 30, selection);
		}
	}
}, false);

// Close the bubble when we click on the screen.
document.addEventListener('mousedown', function (e) {
	var target = e.target.closest("div.bubble");
	if (target == null) {
		bubble.style.visibility = "hidden";
		if (document.getElementsByClassName('saveWord').length != 0) {
			document.getElementsByClassName('saveWord')[0].style.display = "none";
		}
		if (document.getElementsByClassName('voice').length != 0) {
			document.getElementsByClassName('voice')[0].style.display = "none";
		}
	}
}, false);

function translateText(mouseX, mouseY, selection) {
	chrome.extension.sendRequest({ name: "getAllCookies", audio: "" }, function (responseAllCookies) {
		chrome.extension.sendRequest({ name: "getDictToExtension", audio: selection }, function (data) {
			chrome.extension.sendRequest({ name: "soundSetting", audio: "" }, function (soudSetting) {
				if (soudSetting === 'ON') {
					chrome.extension.sendRequest({ name: "runAudio", audio: data.messages[3].attachment.payload.url }, function (response) {
						console.log(response);
					});
				}
			});


			if (data.messages[0].text == null) {
				renderBubble(mouseX, mouseY, "<div>" + jsUcfirst(data.messages[2].text) + "</div>", selection);
			} else {
				if (data.Selected == false) {
					renderBubble(mouseX, mouseY, "<div><div class='pron'><span>" + data.messages[0].text + "</span><button class='voice'></button></div>" + data.messages[2].text + "<br/>" + removeLastChar(jsUcfirst(data.messages[1].text)) + "</div><button class='saveWord'></button>", selection, data.messages[3].attachment.payload.url);
				} else {
					renderBubble(mouseX, mouseY, "<div><div class='pron'><span>" + data.messages[0].text + "</span><button class='voice'></button></div>" + data.messages[2].text + "<br/>" + removeLastChar(jsUcfirst(data.messages[1].text)) + "</div><button class='saveWord selected'></button>", selection, data.messages[3].attachment.payload.url);
				}
			}

		});
	});
}

// Move that bubble to the appropriate location.
function renderBubble(mouseX, mouseY, selection, voca, audio) {
	var url = "https://uitenglishbot.herokuapp.com/saveword?voca=" + voca;
	var saveword = "fetch(" + '"' + url + '"' + "," + "{credentials:'include',Cookie:" + '"' + allCookies + '"' + "}" + ").then(function(response) {return response.json();});"
	//var voice = "new Audio('"+audio+"').play()";
	var voice = "chrome.extension.sendRequest({ name: '" + "runAudioWhenClick" + "', audio: '" + audio + "'}, function(response) {});";
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
		return string.charAt(0).toUpperCase() + string.slice(1);
	} else {
		return "";
	}
}

function removeLastChar(string) {
	if (string != null) {
		var check = string.match(/, /gi);
		if (check != null && check.length > 1) {
			return string.substring(0, string.length - 2);
		}
		else {
			return string;
		}
	} else {
		return "";
	}
}

//
chrome.runtime.onMessage.addListener(function (data, sender, sendResponse) {
	data = JSON.parse(data);
	if (typeof data.strVoca !== "undefined") {
		console.log(data);
		chrome.extension.sendRequest({ name: "runAudio", audio: data.messages[3].attachment.payload.url }, function (response) {
			console.log(response);
			chrome.extension.sendRequest({ name: "runGoogleAudio", audio: data.messages[2].text }, function (response) {
				console.log(response);
			});
		});
		iziToast.show({
			title: data.strVoca,
			message: data.messages[2].text
		});
	}
	else if (typeof data.Id !== "undefined") {
		chrome.extension.sendRequest({ name: "runAudio", audio: data.SoundUrl }, function (response) {
			console.log(response);
			chrome.extension.sendRequest({ name: "runGoogleAudio", audio: data.MeanEn }, function (response) {
				console.log(response);
			});
		});
		iziToast.show({
			timeout: 10000,
			close: false,
			theme: 'dark',
			icon: '',
			title: data.VocaID + " " + data.Pron,
			message: data.MeanVi + "<br/>" + data.MeanEn,
			position: 'bottomRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
			progressBarColor: 'rgb(0, 255, 184)',
			buttons: [
				['<button>Ok</button>', function (instance, toast) {
					//openInNewTab(data.urlQuestion);
				}, true], // true to focus
				['<button>Close</button>', function (instance, toast) {
					instance.hide({
						transitionOut: 'fadeOutUp',
						onClosing: function (instance, toast, closedBy) {
							console.info('closedBy: ' + closedBy); // The return will be: 'closedBy: buttonName'
						}
					}, toast, 'buttonName');
				}]
			],
			onOpening: function (instance, toast) {
				console.info('callback abriu!');
			},
			onClosing: function (instance, toast, closedBy) {
				console.info('closedBy: ' + closedBy); // tells if it was closed by 'drag' or 'button'
			}
		});
	} else if (typeof data.text !== "undefined") {
		iziToast.show({
			timeout: 8000,
			close: false,
			theme: 'dark',
			icon: '',
			title: data.title,
			message: data.text,
			position: 'bottomLeft', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
			progressBarColor: 'rgb(0, 255, 184)',
			buttons: [
				['<button>Ok</button>', function (instance, toast) {
					openInNewTab(data.urlQuestion);
				}, true], // true to focus
				['<button>Close</button>', function (instance, toast) {
					instance.hide({
						transitionOut: 'fadeOutUp',
						onClosing: function (instance, toast, closedBy) {
							console.info('closedBy: ' + closedBy); // The return will be: 'closedBy: buttonName'
						}
					}, toast, 'buttonName');
				}]
			],
			onOpening: function (instance, toast) {
				console.info('callback abriu!');
			},
			onClosing: function (instance, toast, closedBy) {
				console.info('closedBy: ' + closedBy); // tells if it was closed by 'drag' or 'button'
			}
		});
	}
	sendResponse("ok");
	return true;
});

function openInNewTab(url) {
	var win = window.open(url, '_blank');
	win.focus();
}
