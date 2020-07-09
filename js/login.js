let tab1 = document.querySelector("#tab1");
let tab2 = document.querySelector("#tab2");

function cambiarColor(ref) {
    if (ref.getAttribute("data-tab") == "login") {
        tab1.style.color = "gray";
        tab1.style.borderBottom = "3px solid gray";
        tab2.style.color = "#d5d4d6";
        tab2.style.border = "none";
    } else {
        tab2.style.color = "gray";
        tab2.style.borderBottom = "3px solid gray";
        tab1.style.color = "#d5d4d6";
        tab1.style.border = "none";
    }
}

function changeTab(ref) {
    try {
        if (ref.getAttribute("data-tab") == "login") {
            document.getElementById("form-body").classList.remove('active');
            ref.parentNode.classList.remove('signup');
        } else {
            document.getElementById("form-body").classList.add('active');
            ref.parentNode.classList.add('signup');
        }
    } catch (msg) {
        console.log(msg);
    }
}