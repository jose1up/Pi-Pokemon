import "./App.css";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./components/LandingPage";
import { Home } from "./components/Home";
import DetailPokemon from "./components/DetailPokemon";
import CreatePokemon from "./components/CreatePokemon";
import PaginaDeCarga from "./components/PaginaDeCarga";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/carga" element={<PaginaDeCarga />} />
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="Pokemons/:id" element={<DetailPokemon />} />
        <Route exact path="CreatePokemon" element={<CreatePokemon />} />
      </Routes>
    </div>
  );
}

export default App;
