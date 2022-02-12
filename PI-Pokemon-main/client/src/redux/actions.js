import axios from "axios";

export const GET_ALL_POKEMONS = " GET_ALL_POKEMONS";
export const POST_POKEMON = "POST_POKEMON";
export const GET_POKEMON_DETAIL = "GET_POKEMON_DETAIL";
export const FIND_POKEMON = "FIND_POKEMON";
export const FILTER_POKEMON_TYPES = "FILTER_POKEMON_TYPES";
export const ORDER_POKEMON = "ORDER_POKEMON";
export const GET_TYPES = "GET_TYPES";
export const FILTER_CREATE = "FILTER_CREATE";
export const CLEAN_DETAIL = " CLEAN_DETAIL"

export const getAllPokemons = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:3001/pokemons");
      dispatch({ type: GET_ALL_POKEMONS, payload: data });
    } catch (error) {
      console.log("error en get all pokemon ", error);
    }
  };
};

export const postPokemon = (pokemon) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3001/pokemons",
        pokemon
      );
      dispatch({ type: POST_POKEMON, payload: data });
    } catch (error) {
      console.log("error en post all pokemon", error);
    }
  };
};

export const getPokemonDetail = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/pokemons/${id}`);
      dispatch({ type: GET_POKEMON_DETAIL, payload: data });
    } catch (error) {
      console.log("id en get pokemon ", error);
    }
  };
};

export const findPokemon = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/pokemons?name=${name}`
      );
      dispatch({ type: FIND_POKEMON, payload: data });
    } catch (error) {
      console.log("find pokemon ", error);
    }
  };
};

export const getTipes = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:3001/types");
      dispatch({ type: GET_TYPES, payload: data });
    } catch (error) {}
  };
};
export const filterPokemonTypes = (payload) => {
  return {
    type: FILTER_POKEMON_TYPES,
    payload,
  };
};
export const filterCreate = (payload) => {
  return {
    type: FILTER_CREATE,
    payload,
  };
};

export const cleanDetail = () => {
  return (dispatch) => {
    dispatch({ type: CLEAN_DETAIL });
  };
};

export const orderPokemon = (payload) => {
  return {
    type: ORDER_POKEMON,
    payload,
  };
};
