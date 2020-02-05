// NAV LOGIC

const campaignButton = document.getElementById("camButton");
const navButtons = document.getElementsByClassName("navBlock");
const fourSections = document.getElementsByClassName("moreInfo");
const imgButton = document.getElementById("imgButton");
const locationButton = document.getElementById("locButton");
console.log(navButtons);

navButtons[0].addEventListener("click", () => {
    console.log(fourSections);
    fourSections[0].style.display = "block";
    fourSections[1].style.display = "none";
    fourSections[2].style.display = "none";
    fourSections[3].style.display = "none";
})

navButtons[1].addEventListener("click", () => {
    console.log(fourSections);
    fourSections[0].style.display = "none";
    fourSections[1].style.display = "block";
    fourSections[2].style.display = "none";
    fourSections[3].style.display = "none";
})

navButtons[2].addEventListener("click", () => {
    console.log(fourSections);
    fourSections[0].style.display = "none";
    fourSections[1].style.display = "none";
    fourSections[2].style.display = "block";
    fourSections[3].style.display = "none";
})

navButtons[3].addEventListener("click", () => {
    console.log(fourSections);
    fourSections[0].style.display = "none";
    fourSections[1].style.display = "none";
    fourSections[2].style.display = "none";
    fourSections[3].style.display = "block";
})

locationButton.addEventListener("click", () => {
    console.log(fourSections);
    fourSections[0].style.display = "none";
    fourSections[1].style.display = "none";
    fourSections[2].style.display = "none";
    fourSections[3].style.display = "block";
})

imgButton.addEventListener("click", () => {
    console.log(fourSections);
    fourSections[0].style.display = "block";
    fourSections[1].style.display = "none";
    fourSections[2].style.display = "none";
    fourSections[3].style.display = "none";
})