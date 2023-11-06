import React, {useState} from "react";
import {Link, useOutlet} from "react-router-dom";
import cl from "./pokedexPage.module.css";
import {pokemonAPI} from "../../services/pokemonService";
import Loading from "../../components/Loading/Loading";
import ErrorPage from "../ErrorPage/ErrorPage";

const getImageSRCEnding = (url: string) => {
	const id = url.match(/\d*(?=\/$)/)?.[0];

	if (id === undefined)
		return "001";
	else
		return "000".slice(id.length) + id + ".png";
};

const PokedexPage = () => {
	const outlet = useOutlet();
	const [page, setPage] = useState<number>(0);
	const limit = 20;
	const imageSRC = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
	const {data, isLoading, error} = pokemonAPI.useGetPokemonListQuery(`https://pokeapi.co/api/v2/pokemon?offset=${page * limit}&limit=${limit}`);

	if (outlet) return outlet;

	if (isLoading) return <Loading />;
	if (!data || error) return <ErrorPage />;

	return (
		<div className={cl.page}>
			<h1>Pokédex</h1>
			<ul className={cl.pokemons}>
				{data.results.map((pokemon) => <Link
					key={pokemon.name}
					to={pokemon.name}
					style={{
						background: `url(${imageSRC + getImageSRCEnding(pokemon.url)}) no-repeat center center`,
						backgroundSize: "contain",
						backgroundColor: "#cccccc",
					}}
					className={cl.pokemon}
				>
					<li>{pokemon.name}</li>
				</Link>)}
			</ul>
		</div>
	);
};

export default PokedexPage;
