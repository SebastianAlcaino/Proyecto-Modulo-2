$(document).ready(function () {

    console.log("deposit.js cargado");

    $("#formulario").submit(function (event) {

        event.preventDefault();

        console.log("Formulario enviado");

        let amount = parseFloat($("#amount").val().trim());

        if (isNaN(amount) || amount <= 0) {
            alert("Debe ingresar un monto válido para depositar.");
            console.warn("CONSOLE WARN: El monto ingresado no es un número válido:", $("#amount").val());
            console.error("CONSOLE ERROR: Monto inválido:", $("#amount").val());
            console.log("CONSOLE LOG: Monto inválido ingresado:", $("#amount").val());
            console.table("CONSOLE TABLE: Detalles del error:", { inputValue: $("#amount").val(), parsedValue: amount });
            return;
        }

        let balance = Number(localStorage.getItem("accountBalance")) || 0;

        balance += amount;

        localStorage.setItem("accountBalance", balance);


        console.log("Guardado:", localStorage.getItem("accountBalance"));

        console.log("Saldo guardado:", balance);


        let movimientos = JSON.parse(localStorage.getItem("movimientos")) || [];

        let movimiento = {
            fecha: new Date().toLocaleString(),
            tipo: "Depósito",
            destinatario: "-",
            monto: amount
        };

        movimientos.push(movimiento);
        localStorage.setItem("movimientos", JSON.stringify(movimientos));


        alert(`Depósito de $${amount.toFixed(2)} realizado con éxito.`);

        window.location.href = "menu.html";
    });

});