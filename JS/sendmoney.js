$(document).ready(function () {

    // Si aún no existe un saldo, se crea uno inicial
    if (localStorage.getItem("saldo") === null) {
        localStorage.setItem("saldo", 100000);
    }

    $("#formulario").submit(function (event) {

        event.preventDefault();

        // Obtener datos del formulario
        let nombre = $("#fullname").val().trim();
        let correo = $("#email").val().trim();
        let numeroCuenta = $("#accountNumber").val().trim();
        let tipoCuenta = $("#accountType").val().trim();
        let banco = $("#bank").val().trim();
        let monto = parseFloat($("#transferAmount").val());

        // Validar campos vacíos
        if (
            nombre === "" ||
            correo === "" ||
            numeroCuenta === "" ||
            tipoCuenta === "" ||
            banco === "" ||
            isNaN(monto)
        ) {
            alert("Debe completar todos los campos.");
            return;
        }

        // Validar monto
        if (monto <= 0) {
            alert("El monto debe ser mayor que cero.");
            return;
        }

        // Obtener saldo actual
        let balance = parseFloat(localStorage.getItem("accountBalance"));

        // Verificar saldo suficiente
        if (monto > balance) {
            alert("Saldo insuficiente.");
            return;
        }

        // Descontar dinero
        balance -= monto;

        // Guardar nuevo saldo
        localStorage.setItem("accountBalance", balance);

        // Obtener historial
        let movimientos = JSON.parse(localStorage.getItem("movimientos")) || [];

        // Crear movimiento
        let movimiento = {
            fecha: new Date().toLocaleString(),
            tipo: "Transferencia",
            destinatario: nombre,
            correo: correo,
            banco: banco,
            cuenta: numeroCuenta,
            tipoCuenta: tipoCuenta,
            monto: monto
        };

        // Agregar al historial
        movimientos.push(movimiento);

        // Guardar historial
        localStorage.setItem("movimientos", JSON.stringify(movimientos));

        alert("Transferencia realizada correctamente.");

        console.log("Saldo restante:", balance);
        console.log(movimientos);

        // Limpiar formulario
        $("#formulario")[0].reset();

        // Redirigir a la página de menú
        window.location.href = "menu.html";

    });

});



