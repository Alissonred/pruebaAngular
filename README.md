# Schedule hospital data

## Índice

- [1. Descripción](#1-descripcion)
- [2. Resumen del proyecto](#2-resumen-del-proyecto)
- [3. Fuentes de información](#3-fuentes-de-informacion)
- [4. Funcionamiento básico](#4-funcionamiento-basico)
- [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptacion-minimos-del-proyecto)
- [6. Consideraciones técnicas](#6-consideraciones-tecnicas)
- [7. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)

---

## 1. Descripción

El presente proyecto está modelado para administrar las cifras generales referentes a pacientes con covid19 de una cadena de hospitales. 
Dada la crisis sanitaria debido al covid 19 los hospitales deben tener un control interno general de las cifras de casos por día y realizar dichos reportes a la secretaría de salud para información de la ciudadanía.


## 2. Resumen del proyecto

La aplicación permite agregar registros con campos para: fecha, total de casos confirmados, total de muertes, total de recuperaciones entre otras.

//////////////imagen

Adicionalmente, la aplicación permite editar, eliminar y visualizar de manera tabulada el total de registros.

//////////////imagen
Por otra parte,  permite visualizar las cifras generales referentes al covid 19 a nivel mundial.

## 3. Fuentes de información

La aplicación consume dos API: 
* Para obtener las cifras diarias de cada pais se implementa [CORONAVIRUS COVID19 API](https://documenter.getpostman.com/view/10808728/SzS8rjbc#00030720-fae3-4c72-8aea-ad01ba17adf8)
* Para realizar la administración de los registros, se implementa la librería [Json Server](https://www.npmjs.com/package/json-server). Que permite generar rápidamente una API REST falsa que se ejecuta en el puerto http://localhost:3000/


 ## 4. Funcionamiento básico

* Para iniciar sesión modo prueba, se deben registrar elia.martinez@systers.xyz como usuario y 123456 como contraseña
* Luego de acceder al home, a través del menú en la parte izquierda a la sección "Countries today" para poder visualizar las cifras diarias de casos en cada pais
* En la sección "Records, se podrán consultar, Editar y eliminar cada uno de los registros realizados"; asi como añadir un nuevo registro.
