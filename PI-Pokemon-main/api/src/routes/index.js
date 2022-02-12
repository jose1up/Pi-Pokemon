const { Router } = require("express");
const pokemonRoute = require("./pokemon");
const tiposRoute = require("./tipos");


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);








router.use("/pokemons", pokemonRoute);
router.use("/types", tiposRoute);

module.exports = router;
