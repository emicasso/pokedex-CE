import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router";

export default function InfoPokemon() {
  const navigate = useNavigate();
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

  function onClick() {
    navigate("/list");
  }

  if (dataPokemon === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-screen container mx-auto font-Karla">
      <div className="">
        <button
          onClick={onClick}
          className="font-bold text-[#F9F4D0] bg-[#F2CB07] rounded-lg py-3 my-3 shadow-2xl px-10 uppercase border-b-8 border-[#C6A606] hover:bg-[#C6A606] hover:border-[#F2CB07] transition ease-in duration-150"
        >
          Volver a lista
        </button>
      </div>
      info de cada personaje no me salio solucionar el rerenderizado :(((((((
      {/* <img alt="Pokemon" src={dataPokemon.sprites.front_default}/> */}
      <div className="rounded-3xl mx-auto overflow-hidden shadow-2xl shadow-[#F2CB07] w-1/2 my-3 bg-black">
        <img alt="" src="https://i.imgur.com/dYcYQ7E.png" className="w-full" />
        <div className="flex justify-center -mt-20">
          <img
            alt=""
            src={dataPokemon.sprites.front_default}
            className="rounded-full border-solid w-1/3 border-white border-2 -mt-3"
          />
        </div>
        <div className="text-center px-3 pb-6 pt-2 ">
          <h3 className="text-white text-sm bold font-sans uppercase">
            {dataPokemon.name}
          </h3>
          <p className="mt-2 font-sans font-light text-white">Habiliadades</p>
        </div>
        <div className="flex justify-center pb-3 text-white">
          <div className="text-center mr-3 border-r pr-3">
            <h2>{}</h2>
            <span>Habiblidad 1</span>
          </div>
          <div className="text-center">
            <h2>{}</h2>
            <span>Habiblidad 2</span>
          </div>
        </div>
        <div className="text-start px-3 pb-6 pt-2 ">
          <h3 className="text-white text-sm bold font-sans uppercase">
            Altura: {dataPokemon.height}mt
          </h3>
          <p className="mt-2 font-sans font-light text-white">Region: {}</p>
        </div>
      </div>
    </div>
  );
}
