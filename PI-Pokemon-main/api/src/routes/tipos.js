const { default: axios } = require("axios");
const { Router } = require("express");
const router = Router();
const { Pokemon, Type } = require("../db");


// traemos de la api todos los tipo
router.get("/", async (req, res, next) => {
    try {
      const api = await axios.get("https://pokeapi.co/api/v2/type"); //Trae todos los tipos
      const types = await api.data // trae la respuesta en data
      for (type of types.results) { //Entra a la propiedad results, a cada elemento..
        const find = await Type.findOne({ where: {name: type.name}}); // Entra a la propiedad name y busca si ya existe 
        if (!find)  { // Si no lo encuentra..
          await Type.create({ name: type.name }); //Lo agrega a la base de datos
        } else {
          return res.json(await Type.findAll()) // Sino devuelve todos los tipos
        }
      }
      res.json(await Type.findAll()); // devuelvo todos los tipos de la Db.
    } catch (error) {
      next(error);
    }
  });




module.exports = router;
