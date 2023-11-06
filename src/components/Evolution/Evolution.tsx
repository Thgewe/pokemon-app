import React from "react";
import cl from "./evolution.module.css";
import { pokemonAPI } from "../../services/pokemonService";
import Loading from "../Loading/Loading";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import {
	getEvolutionsFromChain,
	IEvolutions,
} from "../../utils/getEvolutionsFromChain";
import { NavLink } from "react-router-dom";

interface IEvolutionProps {
	id: string;
}

const Evolution = ({ id }: IEvolutionProps) => {
	const { data, isLoading, error } =
		pokemonAPI.useGetEvolutionChainByIdQuery(id);

	if (isLoading) return <Loading />;
	if (!data || error) return <ErrorPage />;

	return (
		<div className={cl.chain}>
			<h3>
				Evolution chain<span>(from left to right)</span>
			</h3>
			<EvolutionChainItem ev={getEvolutionsFromChain(data.chain)} />
		</div>
	);
};

interface IEvolutionChainItemProps {
	ev: IEvolutions;
}

const EvolutionChainItem = ({ ev }: IEvolutionChainItemProps) => {
	return (
		<div className={cl.item}>
			<NavLink to={"../" + ev.name}>{ev.name}</NavLink>
			{ev.evolves_to.length !== 0 && (
				<div className={cl.next}>
					{ev.evolves_to.map((el) => (
						<EvolutionChainItem key={el.name} ev={el} />
					))}
				</div>
			)}
		</div>
	);
};

export default Evolution;
