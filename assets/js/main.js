

function openLink(evt, linkName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("myLink");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" ruta-button-bg", "");
    }
    document.getElementById(linkName).style.display = "block";
    evt.currentTarget.className += " ruta-button-bg";
    imageHeight()
}

function ToggleMenu() {
    var element = document.getElementById("sidemenu"),
        backdrop = document.getElementById("backdrop")
    element.classList.toggle('toggled');
    backdrop.classList.toggle('toggled')

}

function ToggleAccordeon(element) {
    element.classList.toggle('toggled');
    element.nextElementSibling.classList.toggle('toggled')
}

function imageHeight() {
    var element = document.getElementById("selection-img"),
        secWindow = document.getElementById("section-window"),
        defaultHeight = document.getElementById("selection-img").naturalHeight;
    
    if (secWindow.offsetHeight > element.height) {
        element.height = secWindow.offsetHeight * 1.2;
    } else {
        element.height = defaultHeight;
    }
    
    
}
document.body.onload = function() {    
    imageHeight();
    document.getElementsByClassName("tablink")[0].click();
}
