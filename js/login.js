let tab1 = document.querySelector("#tab1");
let tab2 = document.querySelector("#tab2");
let tab_1 = document.querySelector("#tab_1");
let tab = document.querySelector("#tab_1").style;
let tab_2 = document.querySelector("#tab_2");
let tab_3 = document.querySelector("#tab_3");
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

// function changeTabPago(ref) {
//     try {
//         if (ref.getAttribute("data-tab") == "direccion") {
//             document.getElementById("form-body").classList.remove('active');
//             document.getElementById("form-body").classList.remove('active1');
//             ref.parentNode.classList.remove('page');
//             ref.parentNode.classList.remove('page');
//         }

//         if (ref.getAttribute("data-tab") == "pago" ) {
//             document.getElementById("form-body").classList.add('active');
//             document.getElementById("form-body").classList.remove('active1');
//             ref.parentNode.classList.remove('page');
//             ref.parentNode.classList.remove('page');
//         } 

//         else {
//             document.getElementById("form-body").classList.add('active1');
//             ref.parentNode.classList.add('page');
//             ref.parentNode.classList.remove('page');
//         }
//     } catch (msg) {
//         console.log(msg);
//     }
// }

function tabb1(ref){
    document.getElementById("form-body").classList.remove('active');
    document.getElementById("form-body").classList.remove('active1');
    ref.parentNode.classList.remove('page');
    ref.parentNode.classList.remove('page');
    tab_1.style.color = "gray";
    tab_1.style.borderBottom = "3px solid gray";
    tab_2.style.color = "#d5d4d6";
    tab_2.style.border = "none";
    tab_3.style.color = "#d5d4d6";
    tab_3.style.border = "none";
}

function tabb2(ref){
    document.getElementById("form-body").classList.add('active');
    document.getElementById("form-body").classList.remove('active1');
    ref.parentNode.classList.remove('page');
    ref.parentNode.classList.remove('page');
    tab_2.style.color = "gray";
    tab_2.style.borderBottom = "3px solid gray";
    tab_1.style.color = "#d5d4d6";
    tab_1.style.border = "none";
    tab_3.style.color = "#d5d4d6";
    tab_3.style.border = "none";
}

function tabb3(ref) {
    try {

            document.getElementById("form-body").classList.add('active1');
            ref.parentNode.classList.add('page');
            ref.parentNode.classList.remove('page');
            tab_3.style.color = "gray";
            tab_3.style.borderBottom = "3px solid gray";
            tab_1.style.color = "#d5d4d6";
            tab_1.style.border = "none";
            tab_2.style.color = "#d5d4d6";
            tab_2.style.border = "none";

    } catch (msg) {
        console.log(msg);
    }
}

function cambiarColorPago(ref) {
    if (ref.getAttribute("data-tab") == "direccion") {
        tab_1.style.color = "gray";
        tab_1.style.borderBottom = "3px solid gray";
        tab_2.style.color = "#d5d4d6";
        tab_2.style.border = "none";
        tab_3.style.color = "#d5d4d6";
        tab_3.style.border = "none";
    }
    else if (ref.getAttribute("data-tab") == "pago") {
        tab_2.style.color = "gray";
        tab_2.style.borderBottom = "3px solid gray";
        tab_1.style.color = "#d5d4d6";
        tab_1.style.border = "none";
        tab_3.style.color = "#d5d4d6";
        tab_3.style.border = "none";
    } 
    else {
        tab_3.style.color = "gray";
        tab_3.style.borderBottom = "3px solid gray";
        tab_1.style.color = "#d5d4d6";
        tab_1.style.border = "none";
        tab_2.style.color = "#d5d4d6";
        tab_2.style.border = "none";
    }
}