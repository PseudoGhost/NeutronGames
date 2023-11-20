function openWin(link) {
	let win = window.open();
	let iframe = win.document.createElement('iframe');
	win.document.write('<html><head><link href="style.css" rel="stylesheet" type="text/css" /><meta name="viewport" content="width=device-width"></head></html>')
	iframe.style.width = "100%";
	iframe.style.height = "100%";
	iframe.style.border = "none";
	iframe.frameBorder = 0;
	iframe.src = link;
	win.document.body.appendChild(iframe);
};

function buttonPress () {
	let passwordEntered = document.getElementById("pwd").value;
	if (passwordEntered === "Password") {
		console.log("logged in!");
		openWin("https://neutrongames.olemon.repl.co/home.html");
	} else if (passwordEntered === "") {} else {
		alert("Incorrect password");
	}
}
