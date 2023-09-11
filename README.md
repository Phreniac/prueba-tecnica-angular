## Prueba Tecnica Angular 

> Fabian Marin

# AngularTree

Este proyecto fue generado con Angular CLI versión 16.2.1.

Css
Routing

## Development server

Ejecuta ng serve para un servidor de desarrollo. Navega a http://localhost:4200/. La aplicación se recargará automáticamente si cambias alguno de los archivos fuente.

## Code scaffolding

Ejecuta ng generate component nombre-del-componente para generar un nuevo componente. También puedes usar ng generate directive|pipe|service|class|guard|interface|enum|module.

## Build

Ejecuta ng build para construir el proyecto. Los artefactos de construcción se guardarán en el directorio dist/.

## Map

Se uso la libreria "leaflet" para el mapa

## Components

### Se crearon 3 componentes y un servicio:

- Componente "main": este es el home, que contendra el componente de la lista de los arboles y el componente modal para mostrar la información
- Componente "tree-card": componente carta del arbol, aca se muestra el nombre y el sobrenombre del arbol, al hacerle click se levanta el modal con la información del arbol seleccionado
- Componente "tree-modal": este componente tiene un fondo oscuro y un contenedor con el titulo, la imagen y el mapa con la locación segun las coordenadas
- Servicio "tree-service": Servicio desde donde se llama a la API otorgada para la obtencion de los objetos(arboles)

