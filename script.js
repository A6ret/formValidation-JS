"use strict";

//style div form
const divForm = document.querySelectorAll("form div");
for (let i = 0; i < divForm.length; i++) {
    if (divForm[i].className == "btnSubmit") {
        divForm[i].style.display = "grid";
        divForm[i].style.gridTemplateColumns = "1fr";
        divForm[i].style.justifyItems = "end";
    } else {
        divForm[i].style.display = "grid";
        divForm[i].style.justifyItems = "start";
        divForm[i].style.gridTemplateColumns = "1fr 1fr 1fr";
    }
}

//validation form
const form = document.getElementById("formMakanan");
const btnSubmit = form.querySelector("input#submit");

btnSubmit.addEventListener("click", function(e) {
    let isNumJlh = /^\d+$/.test(form.children[3].lastElementChild.value);
    let isNumHp = /^\d+$/.test(form.children[4].lastElementChild.value);

    for (let i = 0; i < form.childElementCount; i++) {
        if (i == 6) {
            continue;
        } else if (form.children[i].lastElementChild.value.length < 1 && i != 3 && i != 4) {
            e.preventDefault();
            form.children[i].lastElementChild.style.backgroundColor = "#ff6161";
        } else if (i == 3 && isNumJlh == false) {
            e.preventDefault();
            form.children[3].lastElementChild.style.backgroundColor = "#ff6161";
            form.children[3].lastElementChild.setAttribute("placeholder", "Tidak boleh kosong!");
        } else if (i == 4 && isNumHp == false) {
            e.preventDefault();
            form.children[4].lastElementChild.style.backgroundColor = "#ff6161";
            form.children[4].lastElementChild.setAttribute("placeholder", "Nomor Hp tidak valid.");
        } else {
            form.children[i].lastElementChild.removeAttribute("style");
        };
    }
});