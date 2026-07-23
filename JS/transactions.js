$(document).ready(function () {

    let movimientos = JSON.parse(localStorage.getItem("movimientos")) || [];

    console.log("Movimientos cargados:", movimientos);

    // Si no existen movimientos
    if (movimientos.length === 0) {

        $("#allTransactions").html("No existen movimientos.");

    } else {

        // Obtener todos los movimientos
        let ultimosMovimientos = movimientos.reverse();

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

        $("#allTransactions").html(html);

    }

});