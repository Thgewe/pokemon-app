import React from "react";
import { useOutlet } from "react-router-dom";
import cl from "./pokedexPage.module.css";

const PokedexPage = () => {
	const outlet = useOutlet();

	if (outlet) return outlet;

	return (
		<>
			<div className={cl.page}>
				<h1>Pokédex</h1>
			</div>
		</>
	);
};

export default PokedexPage;
