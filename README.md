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
<div align="center">
<img src="https://i.postimg.cc/L6Sp30xk/Snapshot.png" alt="cover" />
</div>
<div align="center">
<img src="https://i.postimg.cc/hP0qybYk/Snapshot-1.png" alt="cover" />
</div>
<div align="center">
<img src="https://i.postimg.cc/NjfvW2q5/Snapshot-2.png" alt="cover" />
</div>






