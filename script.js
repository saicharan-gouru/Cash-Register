var billAmount = document.querySelector("#bill-amount");
var amountGiven = document.querySelector("#amount-given");
var btnCheck = document.querySelector("#btn-check");

btnCheck.addEventListener("click", function a() { alert(billAmount.value + amountGiven.value) });