import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";

export default function InfoPokemon() {
  const [dataPokemon, setInfPokemon] = useState([]);
  const params = useParams();

  const initalUrl = `https://pokeapi.co/api/v2/pokemon/${params.id}`;

  const fetchInfoPokemon = (url) => {
    fetch(url)
      .then((response) =>
        // console.log(response)
        response.json()
      )
      .then((result) => {
        setInfPokemon(result);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchInfoPokemon(initalUrl);
  }, [initalUrl]);

  if (dataPokemon === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      info de cada personaje no me salio solucionar el rerenderizado :(((((((
      <h1>
        Nombre:
        {dataPokemon.name}
      </h1>
      <img alt="Pokemon" src={dataPokemon.sprites.front_default}/>
    </div>
  );
}
