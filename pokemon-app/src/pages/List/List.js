import React, { createContext, useEffect, useState } from 'react'
import { getPokemones } from "../../services/pokemons";
import PokemonTable from '../PokmeonsTable/PokemonTable';
import Navbar from "../Navbar";


export const UsersContext = createContext();


export default function List() {
  const [pokemons, setPokemons] = useState([]);

  const getPokemonData = async () => {
    let pokemonArray = [];
    for (let i = 1; i <= 20; i++) {
      pokemonArray.push(await getPokemones(i));
    }
    console.log("y=" + pokemonArray);
  };
  async function getData() {

    try {
      const  results  = await getPokemones();
      const data = results.data.results
      setPokemons(data)
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <UsersContext.Provider value={{
      pokemons
    }}>
      <div className='h-full bg-black'>
        <Navbar />
        <PokemonTable />
      </div>
    </UsersContext.Provider>
  )
}
