import { INamedAPIResource } from "./IPokemon";

export interface IEvolutionChain {
	id: number;
	baby_trigger_item?: INamedAPIResource;
	chain: IChainLink;
}

export interface IChainLink {
	is_baby: boolean;
	species: INamedAPIResource;
	evolution_details: IEvolutionDetail[];
	evolves_to: IChainLink[];
}

export interface IEvolutionDetail {
	item?: INamedAPIResource;
	trigger: INamedAPIResource;
	gender?: number;
	held_item?: INamedAPIResource;
	known_move?: INamedAPIResource;
	known_move_type?: INamedAPIResource;
	location?: INamedAPIResource;
	min_level?: number;
	min_happiness?: number;
	min_beauty?: number;
	min_affection?: number;
	needs_overworld_rain?: boolean;
	party_species?: INamedAPIResource;
	party_type?: INamedAPIResource;
	relative_physical_stats?: number;
	time_of_day?: string;
	trade_species?: INamedAPIResource;
	turn_upside_down?: boolean;
}

export interface IEvolutionTrigger {
	id: number;
	name: string;
	names: IName[];
	pokemon_species: INamedAPIResource[];
}

export interface IName {
	name: string;
	language: INamedAPIResource;
}
