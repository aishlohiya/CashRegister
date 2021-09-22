const billAmountDiv = document.querySelector("#bill-amount");
const cashGivenDiv = document.querySelector("#cash-given");
const buttonNextDiv = document.querySelector("#button-next");
const buttonCheckDiv = document.querySelector("#button-check");
const errorDiv = document.querySelector(".error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const cashSection = document.querySelector(".cashGivenInput");
const tableSection = document.querySelector(".changeReturn");
const output = document.querySelector("#output");

const notesAvailable = [2000,500,100,20,10,5,1];

function checkAmountOfBill () {
    hideError();
    const billValue = (Number(billAmountDiv.value));
    if (billValue > 0) {
        cashSection.style.display = "block";
        buttonNextDiv.style.display = "none";
    } else {
        showError("Please enter valid amount");
    }
}

function checkGivenAmount () {
    hideError();
    const cashBillValue = (Number(billAmountDiv.value));
    const cashGivenValue = (Number(cashGivenDiv.value));
    if(cashBillValue > 0) {
        if (cashGivenValue >= cashBillValue) {
            const amountReturn = cashGivenValue - cashBillValue;
            changeReturn(amountReturn);
        } else {
            showError("Want to wash plates?");
        }
    } else {
        showError("Invaid buddy");
    }
}

function changeReturn(amountReturn) {
    for (var i=0; i < notesAvailable.length; i++) {
        const notesNumber = Math.trunc(amountReturn / notesAvailable[i]);
        amountReturn %= notesAvailable[i];
        noOfNotes[i].innerText = notesNumber;
    }
    tableSection.style.display = "block";
}


function showError(msg) {
    errorDiv.style.display = "block";
    errorDiv.innerText = msg;
}

function hideError () {
    errorDiv.style.display = "none";
    tableSection.style.display = "none";
}
buttonNextDiv.addEventListener("click", checkAmountOfBill);
buttonCheckDiv.addEventListener("click", checkGivenAmount);























