

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
        defaultHeight = document.getElementById("selection-img").naturalHeight,
        tablinks = document.getElementsByClassName("tablink"),
        x = document.getElementsByClassName("myLink");
    
    var y = document.getElementsByClassName('ruta-button-bg');
        var aNode = y[0];
    if ((secWindow.offsetHeight > element.height) && !aNode.classList.contains('clicked')) {
        element.height = secWindow.offsetHeight * 1.2;
        console.log(aNode.classList)
        aNode.classList.add('clicked')
    } else if (!aNode.classList.contains('clicked')){
        for (i = 0; i < x.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" clicked", "");
        }
        element.height = defaultHeight;
    }
    
    
}
document.body.onload = function() {    
    imageHeight();
    document.getElementsByClassName("tablink")[0].click();
}
