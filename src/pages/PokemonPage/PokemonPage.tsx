import React, { useRef } from "react";
import cl from "./pokemonPage.module.css";
import { useParams } from "react-router";
import { pokemonAPI } from "../../services/pokemonService";
import ErrorPage from "../ErrorPage/ErrorPage";
import Loading from "../../components/Loading/Loading";
import { convertHeightToSM, convertWeightToKG } from "../../utils/converter";
import { EPokemonTypesColor } from "../../models/EPokemonTypesColor";
import Evolution from "../../components/Evolution/Evolution";

// TODO: weaknesses

const PokemonPage = () => {
	const params = useParams();
	const constants = useRef({
		fill: "#1769aa",
		empty: "#4dabf5",
		maxStat: 300,
		evolutionURLLength: 42,
		version: "soulsilver",
	});

	const { data, isLoading, error } = pokemonAPI.useGetPokemonByNameQuery(
		params.name ? params.name : "",
	);
	const species = pokemonAPI.useGetSpeciesByNameQuery(
		params.name ? params.name : "",
	);

	if (isLoading || species.isLoading) return <Loading />;
	if (error || !data || !species.data) return <ErrorPage />;

	const description = species.data.flavor_text_entries.find(
		(el) => el.version.name === constants.current.version,
	);

	return (
		<section className={cl.page}>
			<h1>{data.name}</h1>
			<div className={cl.left}>
				<div
					className={cl.image}
					style={{
						background: `url(${
							data.sprites.other.dream_world.front_default ||
							data.sprites.front_default
						}) #cccccc no-repeat center`,
						backgroundSize: "70%",
					}}
				></div>
			</div>
			<div className={cl.right}>
				<div className={cl.descr}>
					<p>
						{description
							? description.flavor_text
							: "There is no description for this pokemon"}
					</p>
					<div>
						Height: <span>{convertHeightToSM(data.height)} sm</span>
					</div>
					<div>
						Weight: <span>{convertWeightToKG(data.weight)} kg</span>
					</div>
				</div>
				<h3>Type</h3>
				<div className={cl.types}>
					{data.types.map((type) => (
						<div
							key={type.type.name}
							style={{
								background: EPokemonTypesColor[type.type.name],
							}}
						>
							{type.type.name}
						</div>
					))}
				</div>
				<h3>Stats</h3>
				<ul className={cl.stats}>
					{data.stats.map((stat) => (
						<li key={stat.stat.name} className={cl.stat}>
							<span
								style={{
									background: `linear-gradient(
									to top,
									${constants.current.fill} 0%,
									${constants.current.fill} ${
							(stat.base_stat /
											constants.current.maxStat) *
										100
						}%,
									${constants.current.empty} ${
							(stat.base_stat /
											constants.current.maxStat) *
										100
						}%,
									${constants.current.empty} 100%
								)`,
								}}
							></span>
							<span>{stat.stat.name}</span>
						</li>
					))}
				</ul>
			</div>
			<Evolution
				id={species.data.evolution_chain.url.slice(
					constants.current.evolutionURLLength,
				)}
			/>
		</section>
	);
};

export default PokemonPage;
