# Brow Asociados - Sitio Web

Este es el sitio web de Brow Asociados, un broker de seguros en Loja, Ecuador.

## Estructura del Proyecto

```
broker-seguros-simple/
├── css/                    # Estilos CSS
│   ├── style.css          # Estilos globales
│   └── components/        # Estilos de componentes
│       └── navbar.css     # Estilos de la barra de navegación
│
├── js/                    # JavaScript
│   ├── main.js           # Script principal
│   └── utils/            # Utilidades
│       └── seo.js        # Funciones para SEO
│
├── img/                   # Imágenes
│   ├── logo.png
│   ├── hero-bg.jpg
│   └── servicios/        # Imágenes de servicios
│
├── servicios/            # Páginas de servicios
│   ├── seguro-vehicular.html
│   ├── seguro-vida.html
│   ├── seguro-hogar.html
│   └── seguro-empresarial.html
│
├── PHPMailer/            # Librería para envío de correos
├── data/                 # Datos del sitio
├── index.html           # Página principal
├── nosotros.html        # Página Nosotros
├── servicios.html       # Lista de servicios
├── contacto.html        # Página de contacto
└── send-email.php       # Script para envío de correos
```

## Características

- Diseño responsive
- Optimizado para SEO
- Formulario de contacto funcional
- Páginas de servicios detalladas
- Navegación intuitiva

## Requisitos

- Servidor web con soporte para PHP
- PHP 7.4 o superior
- Extensión PHP OpenSSL habilitada

## Configuración

1. Subir todos los archivos al servidor web
2. Configurar las credenciales de correo en `send-email.php`:
   ```php
   $smtp_host = 'smtp.hostinger.com';
   $smtp_username = 'tu-correo@dominio.com';
   $smtp_password = 'tu-contraseña';
   $smtp_port = 465;
   ```

## SEO

El sitio está optimizado para SEO con:
- Meta tags dinámicos
- Estructura HTML semántica
- URLs amigables
- Contenido optimizado para palabras clave
- Imágenes con atributos alt
- Títulos y descripciones optimizadas

## Mantenimiento

Para actualizar el contenido:
1. Editar los archivos HTML correspondientes
2. Actualizar las imágenes en la carpeta `img/`
3. Modificar los datos en `data/servicios.js`

## Contacto

Para soporte o consultas:
- Email: info@browasociados.com
- Teléfono: (07) 123-4567
