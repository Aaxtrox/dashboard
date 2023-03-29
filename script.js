// select buttons
var restore = document.getElementById("window-restore");
var close = document.getElementById("window-close");


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