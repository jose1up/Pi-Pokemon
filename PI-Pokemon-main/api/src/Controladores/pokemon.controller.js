const { default: axios } = require("axios");
const { Pokemon, Type } = require("../db");

//hago la primera petision  a la api con los primeros 20 pokemones de la ruta results
const firstApiPetition = async () => {
  try {
    const Api = await axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((data) => {
        return data.data.results;
      })
      .then((data) => {
        return Promise.all(data.map((res) => axios.get(res.url))); //entro a cada elemento url y le hago un get
      })
      .then((data) => {
        return data.map((res) => res.data); // guardo todo la informacion de cada pokemon con todos su datos en mi variable Api
      });

    let arrayApi = Api.map((res) => {
      return {
        id: res.id,
        name: res.name,
        types: res.types.map((t) => t.type.name), // los tipos estan en propiedad llamando name
        img: res.sprites.front_default,
        life: res.stats[0].base_stat,
        strength: res.stats[1].base_stat,
        defense: res.stats[2].base_stat,
        speed: res.stats[3].base_stat,
        height: res.height,
        weight: res.weight,
      };
    });
    return arrayApi;
  } catch (error) {
    console.log(error);
  }
};

const SecondApiRequest = async () => {
  try {
    const Api3 = await axios.get("https://pokeapi.co/api/v2/pokemon");
    const infapi = Api3.data.next;
    const arrayApi = await axios
      .get(infapi)
      .then((data) => {
        return data.data.results;
      })
      .then((data) => {
        return Promise.all(data.map((res) => axios.get(res.url))); //entro a cada elemento url y le hago un get
      })
      .then((data) => {
        return data.map((res) => res.data); // guardo todo la informacion de cada pokemon con todos su datos en mi variable Api
      });
    let arrayApi2 = arrayApi.map((res) => {
      return {
        id: res.id,
        name: res.name,
        types: res.types.map((t) => t.type.name), // los tipos estan en propiedad llamando name
        img: res.sprites.front_default,
        life: res.stats[0].base_stat,
        strength: res.stats[1].base_stat,
        defense: res.stats[2].base_stat,
        speed: res.stats[3].base_stat,
        height: res.height,
        weight: res.weight,
      };
    });

    return arrayApi2;
  } catch (error) {
    console.log(error);
  }
};

//--------- otra forma de traer la info de la api  MUCHO TIEMPO DE ESPERA -------////
// const Segundapeticion = async () => {
//   try {
//     const array = [];
//     for (let index = 1; index < 41; index++) {
//       await axios
//         .get(`https://pokeapi.co/api/v2/pokemon/${index}`)
//         .then((data) => {
//           array.push(data.data);
//         });
//     }
//     let arrayApi = array.map((res) => {
//       return {
//         id: res.id,
//         name: res.name,
//         types: res.types.map((t) => t.type.name), // los tipos estan en propiedad llamando name
//         img: res.sprites.front_default,
//         life: res.stats[0].base_stat,
//         attack: res.stats[1].base_stat,
//         defense: res.stats[2].base_stat,
//         speed: res.stats[3].base_stat,
//         height: res.height,
//         weight: res.weight,
//       };
//     });

//     return arrayApi;
//   } catch (error) {
//     console.log(error);
//   }
// };

// Me tarigo todos lo pokemones de la DB
const getDbInfo = async () => {
  try {
    const results = await Pokemon.findAll({
      //TRAERME TODO LO DE LA TABLA POKEMON, INCLUIDA LA RELACION CON TYPE
      include: {
        model: Type,
        attributes: ['name'],
        through: {
          attributes: [],
        },
      },
    });
    return results;
  } catch (err) {
    console.log(err);
  }
};

/// HAGO UN CONCAT CON LA PRIMERA PETISION + SEGUNDA PETISION + BASE DE DATOS

const GetAllPokemon = async () => {
  const firstRequestInformation = await firstApiPetition();
  const secondRequestInformation = await SecondApiRequest();
  const getAllDatabase = await getDbInfo();
  const AllInf = getAllDatabase
    .concat(firstRequestInformation)
    .concat(secondRequestInformation);
  return AllInf;
};

module.exports = {
  GetAllPokemon,
};
