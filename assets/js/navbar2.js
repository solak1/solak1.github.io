function openNav() {
	if (document.body.clientWidth > 250) {
		document.getElementById("mySidenav").style.width = String(document.body.clientWidth*.5) + "px";

	}
	else {
		document.getElementById("mySidenav").style.width = String(document.body.clientWidth) + "px";
	}

  
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
