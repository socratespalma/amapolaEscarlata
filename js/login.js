let tab1 = document.querySelector("#tab1");
let tab2 = document.querySelector("#tab2");
let inputs = document.getElementsByClassName("formulario");
let label = document.getElementsByClassName("label");


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

function changeTabPago(ref) {
    try {
        if (ref.getAttribute("data-tab") == "direccion") {
            document.getElementById("form-body").classList.remove('active');
            document.getElementById("form-body").classList.remove('visited');
            ref.parentNode.classList.remove('page2');
            ref.parentNode.classList.remove('page3');
        } else if (ref.getAttribute("data-tab") == "pago") {
            document.getElementById("form-body").classList.remove('visited');
            ref.parentNode.classList.add('page2');
            ref.parentNode.classList.remove('page1');
            ref.parentNode.classList.remove('page3');
        } else {
            document.getElementById("form-body").classList.add('active');
            ref.parentNode.classList.add('page3');
            ref.parentNode.classList.remove('page1');
            ref.parentNode.classList.remove('page2');
        }
    } catch (msg) {
        console.log(msg);
    }
}