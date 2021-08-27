var billAmount = document.querySelector("#bill-amount");
var amountGiven = document.querySelector("#amount-given");
var btnCheck = document.querySelector("#btn-check");
var message = document.querySelector("#error-message");

btnCheck.addEventListener("click", function a() {
    message.style.display = "none";
    if (Number(billAmount.value) > 0) {
        if (Number(amountGiven.value) >= Number(billAmount.value)) {


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