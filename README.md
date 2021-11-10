# 02-GifsApp

_Aplicación basada en búsqueda de gifs y mostrarlos por pantalla, usando el servicio de busqueda de gifs: [https://developers.giphy.com/]._

## Pre-requisitos:

Esta aplicación requiere Angular CLI v12 y Node para su correcta ejecucíón

## Ejecución

En la consola de comandos, use `ng serve -o` para abrir ejecutar el proyecto y que se abra automáticamente una pestaña `http://localhost:4200/` en el navegador.

# App GifsApp:

## Componente Sidebar

Tenemos un sidebar en el que mostrar las búsquedas realizadas en la página principal. Este historial está limitado a 10 búsquedas desde nuestro service. Recogerá el historial de busquedas almacenado en el service y lo mostrará en un listado con la directiva ngFor. Además, llamará al servicio para repetir la busqueda en caso de pulsar sobre un elemento del listado.

## Componente Gifs Page

Componente contenedor, el cual contiene los componentes de Búsqueda, y de Resultados.

El primero, realiza la llamada a nuestro service, el cual llama a su vez a giphy, y este devuelve resultados. Estos resultados serán mostrados de forma ordenada en el componente Resultados.

Además, usamos una interfaz para definir todas las propiedades del objeto devuelto por giphy.

En cuanto al service generado, mediante el uso de localStorage nos aseguramos no perder por caché las últimas búsquedas realizadas, las cuales se llevan a cabo con un suscribe a la ruta proporcionada por giphy y los parámetros que hemos definido.
