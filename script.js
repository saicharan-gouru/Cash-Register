var billAmount = document.querySelector("#bill-amount");
var amountGiven = document.querySelector("#amount-given");
var btnCheck = document.querySelector("#btn-check");
var message = document.querySelector("#error-message");
var availableNotes = [2000, 500, 100, 50, 20, 10, 5, 2, 1];
var noOfNotes = document.querySelectorAll(".no-of-notes");

btnCheck.addEventListener("click", function a() {
    message.style.display = "none";
    if (Number(billAmount.value) > 0) {
        if (Number(amountGiven.value) >= Number(billAmount.value)) {
            const cashToBeReturned = Number(amountGiven.value) - Number(billAmount.value);
            calculateChange(cashToBeReturned);
        } else {
            displayErrorMessage("Amount Given Should Be Atleast Equal To Bill Amount");
        }
    } else {
        displayErrorMessage("Bill Amount Should Be Greater Than Zero");
    }
});

function displayErrorMessage(Emsg) {
    message.style.display = "block";
    message.innerText = Emsg;
}

function calculateChange(cashToBeReturned) {
    for (let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(cashToBeReturned / availableNotes[i]);
        cashToBeReturned %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}