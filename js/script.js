document.getElementById("menu-button").addEventListener("click", show_menu);

function show_menu() {
    document.getElementsByTagName("main")[0].classList.toggle('push-container');
    document.getElementsByTagName("footer")[0].classList.toggle('push-container');
    let aside =  document.getElementsByTagName("aside");
    if (aside.length > 0) {
        aside[0].classList.toggle('push-container');
    }

    document.getElementById("show-nav").classList.toggle('push-nav');
}