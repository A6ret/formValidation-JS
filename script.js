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
    for (let i = 0; i < form.childElementCount; i++) {
        if (i == 6) {
            continue;
        } else if (form.children[i].lastElementChild.value.length < 1) {
            e.preventDefault();
            form.children[i].firstElementChild.style.color = "red";
        } else {
            form.children[i].firstElementChild.removeAttribute("style");
        };
    }
});