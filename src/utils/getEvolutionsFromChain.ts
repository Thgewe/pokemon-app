import { IChainLink } from "../models/IEvolution";

export interface IEvolutions {
	name: string;
	evolves_to: IEvolutions[];
}

export const getEvolutionsFromChain = (chain: IChainLink) => {
	const evolutions: IEvolutions = {
		name: chain.species.name,
		evolves_to: chain.evolves_to.map((el) => getEvolutionsFromChain(el)),
	};

	return evolutions;
};
