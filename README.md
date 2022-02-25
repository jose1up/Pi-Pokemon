# Pi-Pokemon

## BoilerPlate

El boilerplate cuenta con dos carpetas: `api` y `client`. En estas carpetas estará el código del back-end y el front-end respectivamente.

En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```

Reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible (las credenciales).

Adicionalmente será necesario que creen desde psql una base de datos llamada `pokemon`

El contenido de `client` fue creado usando: Create React App.

##Funcionalidades 

 - Buscar pokemons
 - Filtrarlos / Ordenarlos
 - Crear nuevos pokemons

## imagenes 
<p>
![Snapshot](https://user-images.githubusercontent.com/90214208/155641209-87ab3def-cc67-485a-8c49-6984ed28c2de.png)
 </p>
![Snapshot_1](https://user-images.githubusercontent.com/90214208/155641226-456c32b2-642b-41dd-9cb1-0cccf3204f26.png)
![Snapshot_2](https://user-images.githubusercontent.com/90214208/155641246-3e039563-eae4-4285-886a-78c91ce744be.png)




