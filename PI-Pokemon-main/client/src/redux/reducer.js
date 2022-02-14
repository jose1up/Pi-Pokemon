import {
  GET_ALL_POKEMONS,
  POST_POKEMON,
  GET_POKEMON_DETAIL,
  GET_TYPES,
  FIND_POKEMON,
  ORDER_POKEMON,
  FILTER_POKEMON_TYPES,
  FILTER_CREATE,
  CLEAN_DETAIL,
  CLEAN_ALL_POKEMON,
} from "./actions";

const initialState = {
  allPokemons: [],
  pokemons: [],
  detail: [],
  types: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        allPokemons: action.payload,
      };
    case POST_POKEMON: {
      return {
        ...state,
      };
    }
    case GET_POKEMON_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    case GET_TYPES:
      return {
        ...state,
        types: action.payload,
      };
    case FIND_POKEMON:
      return {
        ...state,
        allPokemons: action.payload,
      };
    case ORDER_POKEMON:
      let copyallPokemons = [...state.allPokemons];
      let pokemonOrder;
      switch (action.payload) {
        case "all":
          pokemonOrder = copyallPokemons.sort(function (a, b) {
            if (a.id > b.id) {
              return 1;
            }
            if (a.id < b.id) {
              return -1;
            }
            return 0;
          });
          break;
        case "asc":
          pokemonOrder = copyallPokemons.sort(function (a, b) {
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            return 0;
          });
          break;
        case "des":
          pokemonOrder = copyallPokemons.sort(function (a, b) {
            if (a.name < b.name) {
              return 1;
            }
            if (a.name > b.name) {
              return -1;
            }
            return 0;
          });
          break;
        case "strengthAsc":
          pokemonOrder = copyallPokemons.sort((a, b) => {
            if (a.strength > b.strength) {
              return 1;
            }
            if (a.strength < b.strength) {
              return -1;
            }
            return 0;
          });
          break;

        case "strengthDes":
          pokemonOrder = copyallPokemons.sort((a, b) => {
            if (a.strength < b.strength) {
              return 1;
            }
            if (a.strength > b.strength) {
              return -1;
            }
            return 0;
          });
          break;
        default:
          pokemonOrder = copyallPokemons;
      }

      return {
        ...state,
        allPokemons: pokemonOrder,
      };
    case FILTER_CREATE:
      let allPokemon2 = state.pokemons;
      let filterCreate =
        action.payload === "Created"
          ? allPokemon2.filter((el) => el.createdAt)
          : allPokemon2.filter((el) => !el.createdAt);

      return {
        ...state,
        allPokemons: action.payload === "all" ? state.pokemons : filterCreate,
      };

    case CLEAN_DETAIL:
      return {
        ...state,
        detail: [],
      };
    case CLEAN_ALL_POKEMON:
      return {
        ...state,
        allPokemons: [],
      };

    case FILTER_POKEMON_TYPES:
      let allPokemon = state.pokemons;
      let filterPokemonTypes =
        action.payload === "all"
          ? allPokemon
          : allPokemon.filter((el) => el.types.includes(action.payload));

      return {
        ...state,
        allPokemons: filterPokemonTypes,
      };

    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
