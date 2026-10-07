# Viandas Fit

Trabajo Práctico Final (PF.A) - Módulo 3: Desarrollo con React.js y Ecosistema Moderno

Curso Inicial de Desarrollo Front-End - UTN BA

## Descripción

Viandas Fit es un sitio web para un emprendimiento de viandas caseras, saludables y variadas.

El proyecto original fue desarrollado en HTML y CSS (TPI) y después migrado a React, manteniendo la estructura visual original y aplicando una arquitectura basada en componentes reutilizables.

La aplicación cuenta con diferentes secciones informativas, tarjetas dinámicas de viandas, galería de imágenes, testimonios y un formulario de contacto controlado mediante React.

## Tecnologías utilizadas

React

Vite

JavaScript

React Router

CSS

Font Awesome

Google Fonts

## Cómo ejecutar el proyecto

Requisitos

Node.js

npm

1. Clonar el repositorio

git clone https://github.com/Peztierra/viandas-fit-react.git

2. Ingresar a la carpeta del proyecto

cd viandas-fit-react

3. Instalar las dependencias

npm install

4. Ejecutar el proyecto

npm run dev

Luego abrir en el navegador la dirección indicada por Vite, normalmente:

http://localhost:5173/

## Estructura del proyecto

```text
src/
├── assets/
│   └── img/
├── components/
│   ├── Navbar.jsx
│   ├── Layout.jsx
│   ├── Hero.jsx
│   ├── Card.jsx
│   ├── Menu.jsx
│   ├── Benefits.jsx
│   ├── Gallery.jsx
│   ├── Testimonials.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── pages/
│   ├── Home.jsx
│   └── ContactPage.jsx
├── styles/
│   └── styles.css
├── App.jsx
├── main.jsx
└── index.css
```
## Rutas

Ruta

Descripción

/

Página principal

/contacto

Página de contacto

Secciones de la página principal

Navbar

Hero

Nuestras viandas

Beneficios

Galería

Testimonios

Footer

## Funcionalidades

### Navegación

La aplicación utiliza React Router para gestionar la navegación entre la página principal y la página de contacto.

También cuenta con navegación hacia las diferentes secciones de la página principal:

Inicio

Menú

Beneficios

Galería

Contacto

### Componentes reutilizables

El proyecto fue dividido en componentes para mejorar la organización y reutilización del código.

Navbar

Layout

Hero

Card

Menu

Benefits

Gallery

Testimonials

Contact

Footer

### Cards dinámicas

Las viandas se almacenan en un array de objetos y se muestran dinámicamente utilizando map().

El componente Card recibe la información de cada vianda mediante props, permitiendo reutilizar la misma estructura para diferentes productos.

Cada tarjeta muestra:

Imagen

Título

Descripción

Precio

Botón para realizar un pedido

### Galería

La galería utiliza un conjunto de imágenes que se renderizan dinámicamente mediante map().

Cada elemento contiene:

Imagen

Texto descriptivo

Identificador (key)

### Formulario de contacto

El formulario de contacto fue implementado como un componente controlado de React mediante useState.

El formulario permite ingresar:

Nombre

Email

Teléfono

Motivo de contacto

Forma de entrega

Comentarios

También permite:

Enviar el formulario

Resetear los campos

Prevenir el comportamiento por defecto del formulario

Mostrar los datos ingresados en la consola del navegador

## Componentización

La migración de HTML a React se realizó dividiendo la estructura original en componentes reutilizables.

Las estructuras repetitivas, como las tarjetas de viandas y los elementos de la galería, fueron convertidas en componentes y renderizadas dinámicamente utilizando arrays, map() y props.

## Diseño responsive

El proyecto conserva estilos responsive mediante CSS para adaptar la interfaz a diferentes tamaños de pantalla.

Se incluyen reglas específicas para:

Escritorio

Tablets

Dispositivos móviles


####Maximiliano Olmedo
