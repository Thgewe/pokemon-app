import React from "react";
import cl from "./pokemonPage.module.css";
import { useParams } from "react-router";

const PokemonPage = () => {
	const params = useParams();

	return <div>Pokemon: {params.name}</div>;
};

export default PokemonPage;
