let bill = document.getElementById("bill");
let people = document.getElementById("people1");
let custom = document.getElementById("custom");
let tipamount = document.getElementById("first");
let total = document.getElementById("second");
// let btn = document.querySelectorAll(".grid-btn *");
let h2 = document.querySelector("[hiddenheading]");
let tip = 0;
let btnvalue = 15;
// making the % tips 
let btnfive = document.querySelectorAll(".grid-btn *");

let reset = document.querySelector("[peoplezero]")

function activeLink() {
    btnfive.forEach((item) => {
        item.classList.remove("active");

    });
    this.classList.add("active");
    btnvalue = parseInt(document.querySelector(".active").innerHTML.replace("%", ""));
    console.log(btnvalue);



}
btnfive.forEach((item) => {
    item.addEventListener('click', activeLink);
    // console.log(item.innerHTML);
    item.addEventListener('click', () => {
        if (isNaN(btnvalue)) {
            tip = ((bill.value / people.value) / 100) * parseInt(custom.value);
        } else {

            tip = ((bill.value / people.value) / 100) * btnvalue;
        }
        total.innerHTML = parseInt(tip) + parseInt(bill.value);
        tipamount.innerHTML = parseInt(tip);
    })


});
custom.addEventListener('input', () => {
    if (people.value <= 0 || custom.value <= 0 || bill.value <= 0) {
        tipamount.innerHTML = total.innerHTML = "0.00";

    } else {


        if (isNaN(btnvalue)) {
            tip = ((bill.value / people.value) / 100) * parseInt(custom.value);
        } else {

            tip = ((bill.value / people.value) / 100) * btnvalue;
        }
        total.innerHTML = parseInt(tip) + parseInt(bill.value);
        tipamount.innerHTML = parseInt(tip);

    }
})

bill.addEventListener("input", () => {
    if (people.value <= 0 || custom.value <= 0 || bill.value <= 0) {
        tipamount.innerHTML = total.innerHTML = "0.00";

    } else {

        if (isNaN(btnvalue)) {
            tip = ((bill.value / people.value) / 100) * parseInt(custom.value);
        } else {

            tip = ((bill.value / people.value) / 100) * btnvalue;
        }
        total.innerHTML = parseInt(tip) + parseInt(bill.value);
        tipamount.innerHTML = parseInt(tip);
    }

})

people.oninput = function() {
    if (people.value == 0) {

        h2.setAttribute("hiddenheading", "false");

    } else if (people.value <= 0 || custom.value <= 0 || bill.value <= 0) {
        tipamount.innerHTML = total.innerHTML = "0.00";

    } else {
        reset.setAttribute("peoplezero", "false");
        h2.setAttribute("hiddenheading", "true");

        if (isNaN(btnvalue)) {
            tip = ((bill.value / 100) * people.value) * parseInt(custom.value);
        } else {

            tip = ((bill.value / people.value) / 100) * btnvalue;
        }
        total.innerHTML = parseInt(tip) + parseInt(bill.value);
        tipamount.innerHTML = parseInt(tip);
    }


};
reset.addEventListener('click', () => {
    people.value = bill.value = custom.value = null;
    tipamount.innerHTML = total.innerHTML = "0.00";

})