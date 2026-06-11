$(document).ready(function () {

    console.log("deposit.js cargado");

    $("#formulario").submit(function (event) {

        event.preventDefault();

console.log("Formulario enviado");

        let amount = parseFloat($("#amount").val().trim());

        if (isNaN(amount) || amount <= 0) {
            alert("Debe ingresar un monto válido para depositar.");
            return;
        }

        let balance = Number(localStorage.getItem("accountBalance")) || 0;

        balance += amount;

        localStorage.setItem("accountBalance", balance);


        console.log("Guardado:", localStorage.getItem("accountBalance"));

        console.log("Saldo guardado:", balance);
console.log(localStorage.getItem("accountBalance"));


        alert(`Depósito de $${amount.toFixed(2)} realizado con éxito.`);

        window.location.href = "menu.html";
    });

});