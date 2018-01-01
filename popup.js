document.getElementById('token').addEventListener("click", save);

function save() {
	 var valueToken = document.getElementById("extension_token").value;
     chrome.cookies.set({
        url : 'http://olympusenglish.azurewebsites.net/',
        name : 'extension_token',
        value : valueToken
    });
}