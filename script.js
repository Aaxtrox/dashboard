document.getElementById("year").innerHTML = new Date().getFullYear();

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
var links_section = document.getElementById("links-section");
var hamburger = document.querySelector(".hamburger");
var searchbutton = document.getElementById("search-bar-button");

// library background color #0d9488 as default
library.style.backgroundColor = "#115e59";
//loading and links display none as default
loading.style.display = "none";
links_section.style.display = "none";

//add event listener on click to hamburger button
hamburger.addEventListener("click", function() {
    //if hamburger button has class is-active
    if (!hamburger.classList.contains("is-active")) {
        //set nav to transform none
        document.querySelector("nav").style.transform = "none";
        //set searchbutton to display none
        searchbutton.style.display = "none";
        // else if hamburger button does not have class is-active
    } else if (hamburger.classList.contains("is-active")) {
        //set nav to transform translate(-100%)
        document.querySelector("nav").style.transform = "translate(-100%, 0)";
        //delay 0.3s
        setTimeout(function() {
            //set searchbutton to display block
            searchbutton.style.display = "block";
        }, 300);
    }
});

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
    location.href = "https://www.google.com";
});

exit.addEventListener("click", function() {
    location.href = "https://www.google.com";
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

document.addEventListener('DOMContentLoaded', function() {
    [].forEach.call(document.querySelectorAll(".hamburger"), function(el) {
       el.addEventListener('click', function() {
          document.querySelector(".hamburger").classList.toggle("is-active"); 
       })
    })
});

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
    //change background color of clicked button
    this.style.backgroundColor = "#115e59";
    //run function display and pass id name
    display(id);
}

function display(id) {
    console.log(id);
    //if id name is equal to library do nothing
    if (id == "library") {
        //games display block
        games.style.display = "";
        //loading display none
        loading.style.display = "none";
        links_section.style.display = "none";
    } else if (id == "links") {
        //games display none
        games.style.display = "none";
        links_section.style.display = "";
        //loading display block
        loading.style.display = "none";
    } else {
        //games display none
        games.style.display = "none";
        links_section.style.display = "none";
        //loading display block
        loading.style.display = ""
    }
}
