$(document).ready(function () {

    $("#formulario").submit(function (event) {

        event.preventDefault();

        let username = $("#username").val().trim();
        let password = $("#password").val().trim();

        if (username === "" || password === "") {
            alert("Debe ingresar usuario y contraseña.");
            return;
        }

        const validUsername = "admin";
        const validPassword = "1234";

        if (username === validUsername && password === validPassword) {
            alert("Login exitoso");
            window.location.href = "menu.html";
        } else {
            alert("Usuario o contraseña incorrectos");
        }

    });

});