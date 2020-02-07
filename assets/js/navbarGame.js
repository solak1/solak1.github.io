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

const mobileNavButtons = document.getElementsByClassName("sideNavItem");

mobileNavButtons[0].addEventListener("touchstart", () => {
    console.log("showing camp.")
    fiveSections[0].style.display = "block";
    fiveSections[1].style.display = "none";
    fiveSections[2].style.display = "none";
    fiveSections[3].style.display = "none";
    fiveSections[4].style.display = "none";
    closeNav();
});

mobileNavButtons[1].addEventListener("click", () => {
    fiveSections[0].style.display = "none";
    fiveSections[1].style.display = "block";
    fiveSections[2].style.display = "none";
    fiveSections[3].style.display = "none";
    fiveSections[4].style.display = "none";
    closeNav();
})

mobileNavButtons[2].addEventListener("click", () => {
    fiveSections[0].style.display = "none";
    fiveSections[1].style.display = "none";
    fiveSections[2].style.display = "block";
    fiveSections[3].style.display = "none";
    fiveSections[4].style.display = "none";
    closeNav();
})

mobileNavButtons[3].addEventListener("click", () => {
    fiveSections[0].style.display = "none";
    fiveSections[1].style.display = "none";
    fiveSections[2].style.display = "none";
    fiveSections[3].style.display = "block";
    fiveSections[4].style.display = "none";
    closeNav();
})

document.getElementById("logo").addEventListener("touchstart", () => {
    console.log("showing camp.")
    fiveSections[0].style.display = "block";
    fiveSections[1].style.display = "none";
    fiveSections[2].style.display = "none";
    fiveSections[3].style.display = "none";
    fiveSections[4].style.display = "none";
    closeNav();
});