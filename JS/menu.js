$(document).ready(function() {

    let btnTransactions = $("#btnTransactions");
    let btnDeposit = $("#btnDeposit");
    let btnSendMoney = $("#btnSendMoney");

    btnTransactions.click(function(event) {
        event.preventDefault();
        window.location.href = "transactions.html";
    });

    btnDeposit.click(function(event) {
        event.preventDefault();
        window.location.href = "deposit.html";
    });

    btnSendMoney.click(function(event) {
        event.preventDefault();
        window.location.href = "sendmoney.html";
    });

    let balance = Number(localStorage.getItem("accountBalance")) || 0;

    console.log("Saldo leído:", balance);

    $("#accountBalance").text(`$${balance.toFixed(2)}`);

});