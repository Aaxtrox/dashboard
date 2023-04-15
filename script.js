// select buttons
var restore = document.getElementById("window-restore");
var close = document.getElementById("window-close");
var library = document.getElementById("library");
var stores = document.getElementById("stores");
var settings = document.getElementById("settings");
var downloads = document.getElementById("downloads");
var manage = document.getElementById("manage-accounts");
var links = document.getElementById("links");
var documentation = document.getElementById("documentation");
var exit = document.getElementById("exit-button");
var all = document.getElementById("color-change-all");
var other = document.getElementById("color-change-other");
var windows = document.getElementById("windows");
var linux = document.getElementById("linux");
var games = document.getElementById("game-list");
var loading = document.getElementById("loading");

// library background color #0d9488 as default
library.style.backgroundColor = "#115e59";
//loading display none as default
games.style.display = "none";

//add event listener on click to restore button
restore.addEventListener("click", function() {
    if (!document.webkitIsFullScreen) {
        document.documentElement.webkitRequestFullScreen();
    }
    else {
        document.webkitCancelFullScreen();
    }
});

//add event listener on click to close button or exit button
close.addEventListener("click", function() {
    //run function exit
    exit();
});
exit.addEventListener("click", function() {
    //run function exit
    exit();
});

//add event listener on click to library button and run function active
library.addEventListener("click", function() {
    active.call(this);
});

//add event listener on click to stores button and run function active
stores.addEventListener("click", function() {
    active.call(this);
});

//add event listener on click to settings button and run function active
settings.addEventListener("click", function() {
    active.call(this);
});

//add event listener on click to downloads button and run function active
downloads.addEventListener("click", function() {
    active.call(this);
});

//add event listener on click to manage accounts button and run function active
manage.addEventListener("click", function() {
    active.call(this);
});

//add event listener on click to links button and run function active
links.addEventListener("click", function() {
    active.call(this);
});

//add event listener on click to documentation button and run function active
documentation.addEventListener("click", function() {
    active.call(this);
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

//create function exit
function exit() {
    //redirect to google.com
    window.location.href = "https://www.google.com";
}

//create function active
function active() {
    //set background color #0d9488 to all buttons
    library.style.backgroundColor = "";
    stores.style.backgroundColor = "";
    settings.style.backgroundColor = "";
    downloads.style.backgroundColor = "";
    manage.style.backgroundColor = "";
    links.style.backgroundColor = "";
    documentation.style.backgroundColor = "";
    //grab id name of clicked button
    var id = this.id;
    //if id name is equal to library
    if (id == "library" || id == "stores" || id == "settings" ||
    id == "downloads" || id == "manage-accounts" || id == "links" ||
    id == "documentation") {
        //change background color of clicked button
        this.style.backgroundColor = "#115e59";
    }
}
