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

document.getElementsByClassName("tablink")[0].click();