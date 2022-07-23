"use strict";
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
const button = document.getElementById("button");
function somarNumeros(input1, input2, devePrintar) {
    return input1 + input2;
}
let devePrintar = true;
if (button) {
    button.addEventListener("click", () => {
        if (input1 && input2) {
            console.log(somarNumeros(Number(input1.value), Number(input2.value), devePrintar));
        }
    });
}
