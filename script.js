// select buttons
var restore = document.getElementById("window-restore");
var close = document.getElementById("window-close");
var all = document.getElementById("color-change-all");
var other = document.getElementById("color-change-other");


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