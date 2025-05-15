# CafamCultural 
PROYECTO6TO_FINAL

Descripción del Proyecto

Este proyecto consiste en una página web turística desarrollada con HTML, CSS y JavaScript, ejecutada en un entorno Node.js usando Express. Permite mostrar distintos lugares turísticos con imágenes y textos descriptivos, además de contar con una función de reservas conectada a una base de datos.

Todo el desarrollo está pensado para ejecutarse y editarse dentro de Visual Studio Code.

Requisitos previos

Tener instalado Node.js y npm.

Tener instalado Visual Studio Code.

(Opcional) Tener instalado Nodemon para recarga automática en desarrollo.


Instalación y ejecución en Visual Studio Code

1. Abre Visual Studio Code.


2. Abre la carpeta del proyecto: Archivo > Abrir carpeta y selecciona PROYECTO6TO_FINAL.


3. Abre el terminal integrado de VS Code: Terminal > Nuevo terminal.


4. Ejecuta los siguientes comandos en orden:



# Inicializa el proyecto (si no lo has hecho antes)
npm init -y

# Instala Express
npm install express

# Instala Nodemon globalmente para desarrollo (opcional)
npm install -g nodemon

# Ejecuta el servidor
npm run start

> Asegúrate de que app.js esté configurado para escuchar en el puerto correcto (por ejemplo, 3000) y que estés conectado a tu base de datos local o remota correctamente desde db.js.



Estructura del Proyecto

PROYECTO6TO_FINAL/
│
├── .vscode/                # Configuración del editor VS Code
├── node_modules/           # Dependencias instaladas
├── public/                 # Archivos públicos visibles en el navegador
│   ├── Basilica.jpg
│   ├── Catedral.jpg
│   ├── Centro.jpg
│   ├── Cueva.jpg
│   ├── Playa.jpg
│   ├── Playa2.jpg
│   ├── Playa3.jpg
│   ├── Logo_Turistico.png
│   └── ProyectoFinal.css
│
├── routes/                 # Archivos con rutas del backend
│   └── reservas.js
│
├── app.js                  # Archivo principal del servidor (punto de entrada)
├── db.js                   # Conexión con la base de datos
├── index.html              # Página de inicio principal
├── package.json            # Configuración y scripts del proyecto
└── package-lock.json       # Detalles de las versiones de dependencias

Créditos y Enlaces Útiles

Desarrollado por: [Tu nombre o equipo]

Tecnologías utilizadas:

HTML, CSS, JavaScript

Node.js y Express

MySQL

Visual Studio Code



Tutoriales en YouTube utilizados como referencia:

Tutoriales Digitales: https://www.youtube.com/watch?v=zDEUHPUl4iY&ab_channel=TutorialesDigitales

MonkeyWit: https://www.youtube.com/watch?v=KwLTb7If0d4&ab_channel=MonkeyWit

Morsa Programando: https://www.youtube.com/watch?v=9ZVooCNbdlY&ab_channel=MorsaProgramando
