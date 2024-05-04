let counter = 0;
let homeimg = document.getElementById("homeimg");

function first() {
    let h1 = document.getElementById("title");
    let h3 = document.getElementById("result"); // Added to get the result element
    let firstInput = document.getElementById("firstInput");

    if (counter == 0) {
        let text = firstInput.value;

        if (text == "1") {
            h1.innerHTML = "Вы начинаете схватку с львом. Что вы используете чтобы с ним сражаться? Пулемет-3 Ручка-4 ";
        } else if (text == "2") {
            h1.innerHTML = "Вы начинаете схватку с медведем. Что вы используете чтобы с ним сражаться? Пистолет-5 Зубочистка-6";
        }

        counter++;
    } else if (counter == 1) { // Changed to else if to avoid unnecessary checks
        let text = firstInput.value;

        if (text == "3") {
            h1.innerHTML = "Вы использовали пулемет и застрелили льва. Вы сбежали и игра закончилась.";
        } else if (text == "4") {
            h1.innerHTML = "Вы использовали ручку и досмерти заткнули льва. Вы сбежали и игра закончилась.";
        } else if (text == "5") {
            h1.innerHTML = "Вы использовали пистолет и застрелили медведя. Вы сбежали и игра закончилась.";
        } else if (text == "6") {
            h1.innerHTML = "Вы использовали зубочистку и он вас убил. Вы проиграли.";
        }
    }
}