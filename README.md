# pics App 

Buscador de fotos que consume la api [unsplash](https:/unsplash.com) desarrollada con [Angular](https://angular.io) 9.

## Levantar la aplicación en modo desarrollo

Para levantar la aplicación en modo desarrollo hay que seguir los pasos que se detallan a continuación.

### Requisitos previos

1. Es necesario instalar el entorno de ejecucion **NodeJS**. Para ello se debe ir a su [sitio web](https://nodejs.org/es/) y consultar el procedimiento de instalación adecuado para el equipo. La versión usada es la 12.16.1.

2. En segundo lugar, hay que instalar **Angular**. En la [web oficial](https://angular.io/) se puede descargar la versión adecuada. Se ha usado Angular 9.0.0.

### Preparación y ejecución

3. Descargar el repositorio y descomprimirlo.
4. Abrir una consola en la raiz del proyecto y moverse dentro de la carpeta `source`.
5. Instalar las dependencias del proyecto con el comando `$ npm install`.
6. Lanzar la aplicación con el comando `$ ng serve`. Se levantará un servidor en el puerto 4200 del localhost. 

## Funcionamiento

### Lista de fotos

Cuando se inicia la aplicación carga una lista de las 10 primeras fotos con el nombre del autor. El resto se va cargando mediante un scroll infinito. 

Haciendo click que cada foto se navega a una página con sus detalles.

A partir del tercer scrolleo aparece un botón **_UP_** que navega al princio de la página y resetea la lista.

El filtro funciona en inglés y se va aplicando conforme se escribe para las fotos que ya están cargadas y las que se puedan cargar a mayores si se hace scroll. En algunos casos la estructura de la información de la api puede perjudicar la performance de la  applicación. 

### Detalles de una foto

Cuando se navega a los detalles de una foto desde la lista, se presenta la foto con mayor tamaño y título si lo tiene. Además se incluye la información básica de su autor y sus redes sociales.

Se vuelve a la lista desde el menú de navegación o desde el botón **_BACK_**.





