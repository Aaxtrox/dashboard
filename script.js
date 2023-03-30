// select buttons
var restore = document.getElementById("window-restore");
var close = document.getElementById("window-close");
var all = document.getElementById("color-change-all");
var other = document.getElementById("color-change-other");
var windows = document.getElementById("windows");
var linux = document.getElementById("linux");

//add event listener on click to restore button
restore.addEventListener("click", function() {
    if (!document.webkitIsFullScreen) {
        document.documentElement.webkitRequestFullScreen();
    }
    else {
        document.webkitCancelFullScreen();
    }
});

//add event listener on click to close button
close.addEventListener("click", function() {
    window.location.href = "https://www.google.com";
});

//add event listener on click all span
all.addEventListener("click", function() {
    document.getElementById("color-change-all").style.color = "tomato";
    document.getElementById("color-change-other").style.color = "black";
});

//add event listener on click other span
other.addEventListener("click", function() {
    document.getElementById("color-change-other").style.color = "tomato";
    document.getElementById("color-change-all").style.color = "black";
});

//add event listener on click windows img
windows.addEventListener("click", function() {
    windows.src = "./img/microsoft-windows-tomato.png";
    linux.src = "./img/linux.png";
});

//add event listener on click linux img
linux.addEventListener("click", function() {
    linux.src = "./img/linux-tomato.png";
    windows.src = "./img/microsoft-windows.png";
});