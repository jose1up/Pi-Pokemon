const { Router } = require("express");
const { GetAllPokemon } = require("../Controladores/pokemon.controller");
const router = Router();
const { Pokemon, Type } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    let { name } = req.query;
    const pokemonsTotal = await GetAllPokemon();
    if (name) {
      let PokemoName = await pokemonsTotal.filter((el) =>
        el.name.toLowerCase().includes(name.toLowerCase())
      );
      if (PokemoName.length) {
        res.status(200).json(PokemoName);
      } else {
        res.status(404).json({ msg: "no se encuentra" });
      }
    } else {
      res.json(pokemonsTotal);
    }
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  //Busqueda por id
  try {
    const id = req.params.id;
    const pokemonsTotal = await GetAllPokemon();
    if (id) {
      //Si me pasan un ID, filtro el que coincida con ese mismo, sino devuelvo texto.
      let pokemonId = pokemonsTotal.filter((el) => el.id == id);
      pokemonId.length
        ? res.status(200).json(pokemonId)
        : res.status(404).send("No se encontró el pokemon");
    }
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { name, img, life, strength, defense, speed, height, weight, types } =
      req.body;
    const relacion = await Type.findAll({ where: { name: types } });
    // creo la relacion entra mi tabla pokemon y tipo

    const newPokemon = await Pokemon.create({
      name,
      img,
      life,
      strength,
      defense,
      speed,
      height,
      weight,
    });
    if (!name) {
      res.json({ respuesta: "el atributo nombre es obligatorio" });
    }
    //  if (Array.isArray(types) && types.length) {
    //    let dbTypes = await Promise.all(
    //      types.map((t) => {
    //        return Type.findOne({ where: { name: t } });
    //      })
    //  );

    //   return res.send("pokemon creado correctamente");
    // }
    const respuesta = await newPokemon.addTypes(relacion);

    res.json(newPokemon);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
