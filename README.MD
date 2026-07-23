# 💳 Alke Wallet

Proyecto desarrollado como evaluación del **Módulo 2 - Fundamentos del Desarrollo Front-End**.

Alke Wallet es una aplicación web que simula una billetera digital, permitiendo al usuario administrar un saldo, realizar depósitos, efectuar transferencias y consultar el historial de movimientos.

---

## 📋 Características

La aplicación permite:

- 🔐 Simulación de inicio de sesión.
- 💰 Consultar el saldo disponible.
- ➕ Realizar depósitos.
- 💸 Enviar dinero a otros usuarios.
- 📜 Visualizar las últimas transacciones.
- 📊 Consultar el historial completo de movimientos.
- 💾 Persistencia de datos utilizando **LocalStorage**.

---

## 🛠 Tecnologías utilizadas

- HTML5
- CSS3
- Bootstrap 5
- JavaScript (ES6)
- jQuery
- LocalStorage

---

## 📂 Estructura del proyecto

```
Alke-Wallet/
│
├── HTML/
│   ├── login.html
│   ├── menu.html
│   ├── deposit.html
│   ├── sendmoney.html
│   └── transactions.html
│
├── JS/
│   ├── login.js
│   ├── menu.js
│   ├── deposit.js
│   ├── sendmoney.js
│   └── transactions.js
│
│
└── README.md
```

---

## 🚀 Funcionalidades

### Inicio de sesión

El usuario ingresa mediante un formulario de autenticación.

---

### Menú principal

Desde esta pantalla es posible:

- Consultar el saldo actual.
- Visualizar las últimas tres transacciones.
- Navegar hacia las distintas secciones de la aplicación.

---

### Depósitos

Permite ingresar un monto para aumentar el saldo disponible.

Cada depósito:

- Actualiza el saldo.
- Registra el movimiento en el historial.
- Guarda la información en LocalStorage.

---

### Enviar dinero

El usuario puede ingresar los datos del destinatario:

- Nombre
- Correo electrónico
- Banco
- Tipo de cuenta
- Número de cuenta
- Monto a transferir

Antes de realizar la operación se valida:

- Que todos los campos estén completos.
- Que el monto sea mayor a cero.
- Que exista saldo suficiente.

Luego:

- Se descuenta el saldo.
- Se registra la transferencia.
- Se almacena el movimiento.

---

### Historial de movimientos

Permite visualizar todas las transacciones realizadas durante el uso de la aplicación.

Cada movimiento registra:

- Fecha
- Tipo de operación
- Destinatario
- Monto

---

## 💾 Persistencia de datos

La aplicación utiliza **LocalStorage** para almacenar la información entre recargas del navegador.

Se utilizan principalmente las siguientes claves:

| Clave | Descripción |
|--------|-------------|
| accountBalance | Saldo actual de la cuenta |
| movimientos | Historial de todas las transacciones |

---

## 🎨 Frameworks y librerías

### Bootstrap

Se utilizó Bootstrap para:

- Diseño responsive
- Navbar
- Cards
- Botones
- Formularios
- Sistema de grillas

### jQuery

Se utilizó jQuery para:

- Manejo de eventos
- Manipulación del DOM
- Validación de formularios
- Navegación entre páginas

---

## 📱 Diseño Responsive

La aplicación fue diseñada utilizando el sistema de grillas de Bootstrap para adaptarse a dispositivos móviles, tablets y computadores.

---

## ▶️ Cómo ejecutar el proyecto

1. Descargar o clonar el repositorio.

```bash
git clone https://github.com/usuario/alke-wallet.git
```

2. Abrir el proyecto en Visual Studio Code.

3. Ejecutar la aplicación utilizando **Live Server**.

4. Navegar por las distintas páginas de la aplicación.

---

## 👨‍💻 Autor

**Sebastián Alcaino**

Proyecto desarrollado para la evaluación del **Módulo 2 - Fundamentos del Desarrollo Front-End**.

---

## 📄 Licencia

Este proyecto fue desarrollado únicamente con fines educativos.