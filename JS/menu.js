$(document).ready(function () {

    // ----------------------------
    // Botones del menú
    // ----------------------------

    $("#btnTransactions").click(function (event) {
        event.preventDefault();
        window.location.href = "transactions.html";
    });

    $("#btnDeposit").click(function (event) {
        event.preventDefault();
        window.location.href = "deposit.html";
    });

    $("#btnSendMoney").click(function (event) {
        event.preventDefault();
        window.location.href = "sendmoney.html";
    });


    // ----------------------------
    // Mostrar saldo actual
    // ----------------------------

    let balance = Number(localStorage.getItem("accountBalance")) || 0;

    $("#accountBalance").text(
        balance.toLocaleString("es-CL", {
            style: "currency",
            currency: "CLP"
        })
    );


    // ----------------------------
    // Mostrar últimos 3 movimientos
    // ----------------------------

    let movimientos = JSON.parse(localStorage.getItem("movimientos")) || [];

    // Si no existen movimientos
    if (movimientos.length === 0) {

        $("#lastTransactions").html("No existen movimientos.");

    } else {

        // Obtener solamente los últimos tres movimientos
        let ultimosMovimientos = movimientos.slice(-3).reverse();

        let html = "";

        ultimosMovimientos.forEach(function (movimiento) {

            html += `
                <div class="border-bottom mb-2 pb-2">
                    <strong>${movimiento.tipo}</strong><br>
                    Destinatario: ${movimiento.destinatario}<br>
                    Monto: ${movimiento.monto.toLocaleString("es-CL", {
                        style: "currency",
                        currency: "CLP"
                    })}<br>
                    <small>${movimiento.fecha}</small>
                </div>
            `;

        });

        $("#lastTransactions").html(html);

    }

});