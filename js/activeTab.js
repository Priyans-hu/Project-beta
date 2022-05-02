let menu = document.getElementsByClassName("centre-user-options");

function menuClick(cur) {
    for (let i = 0; i < menu.length; i++) {
        menu[i].classList.remove("active");
    }
    cur.classList.add("active");
}