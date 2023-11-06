import { TPokemonTypes } from "./EPokemonTypesColor";

export interface INamedAPIResource {
	name: string;
	url: string;
}

export interface IName {
	name: string;
	language: INamedAPIResource;
}
export interface IAbility {
	id: number;
	name: string;
	is_main_series: boolean;
	generation: INamedAPIResource;
	names: IName[];
	effect_entries: IVerboseEffect[];
	effect_changes: IAbilityEffectChange[];
	flavor_text_entries: IAbilityFlavorText[];
	pokemon: IAbilityPokemon[];
}
export interface IVerboseEffect {
	effect: string;
	short_effect: string;
	language: INamedAPIResource;
}

export interface IEffect {
	effect: string;
	language: INamedAPIResource;
}

export interface IAbilityEffectChange {
	effect_entries: IEffect[];
	version_group: INamedAPIResource;
}

export interface IAbilityFlavorText {
	flavor_text: string;
	language: INamedAPIResource;
	version_group: INamedAPIResource;
}

export interface IAbilityPokemon {
	is_hidden: boolean;
	slot: number;
	pokemon: INamedAPIResource;
}

export interface IVersionGameIndex {
	game_index: number;
	version: INamedAPIResource;
}

export interface IPokemonHeldItem {
	item: INamedAPIResource;
	version_details: IPokemonHeldItemVersion[];
}

export interface IPokemonHeldItemVersion {
	version: INamedAPIResource;
	rarity: number;
}

export interface IPokemonMove {
	move: INamedAPIResource;
	version_group_details: IPokemonMoveVersion[];
}

export interface IPokemonMoveVersion {
	move_learn_method: INamedAPIResource;
	version_group: INamedAPIResource;
	level_learned_at: number;
}

export interface IPokemonStat {
	stat: INamedAPIResource;
	effort: number;
	base_stat: number;
}

export interface IPokemonType {
	slot: number;
	type: {
		name: TPokemonTypes;
		url: string;
	};
}

export interface IPokemonSprites {
	front_default: string;
	front_shiny: string | null;
	front_female: string | null;
	front_shiny_female: string | null;
	back_default: string | null;
	back_shiny: string | null;
	back_female: string | null;
	back_shiny_female: string | null;
	other: {
		dream_world: {
			front_default: string;
			front_female: string | null;
		};
		home: {
			front_default: string | null;
			front_female: string | null;
			front_shiny: string | null;
			front_shiny_female: string | null;
		};
		officialArtwork: {
			front_default: string | null;
			front_shiny: string | null;
		};
	};
}

export interface IPokemon {
	id: number;
	name: string;
	base_experience: number;
	height: number;
	is_default: boolean;
	order: number;
	weight: number;
	abilities: IPokemonAbility[];
	forms: INamedAPIResource[];
	game_indices: IVersionGameIndex[];
	held_items: IPokemonHeldItem[];
	location_area_encounters: string;
	moves: IPokemonMove[];
	past_types: IPokemonTypePast[];
	sprites: IPokemonSprites;
	species: INamedAPIResource;
	stats: IPokemonStat[];
	types: IPokemonType[];
}

export interface IPokemonTypePast {
	generation: INamedAPIResource;
	types: IPokemonType[];
}

export interface IPokemonAbility {
	is_hidden: boolean;
	slot: number;
	ability: INamedAPIResource;
}

export interface ICharacteristic {
	id: number;
	gene_modulo: number;
	possible_values: number[];
	highest_stat: INamedAPIResource;
	descriptions: IDescription[];
}

export interface IDescription {
	description: string;
	language: INamedAPIResource;
}

export interface IEggGroup {
	id: number;
	name: string;
	names: IName[];
	pokemon_species: INamedAPIResource[];
}

export interface IGender {
	id: number;
	name: string;
	pokemon_species_details: IPokemonSpeciesGender[];
	required_for_evolution: INamedAPIResource[];
}

export interface IPokemonSpeciesGender {
	rate: number;
	pokemon_species: INamedAPIResource;
}

export interface IGrowthRate {
	id: number;
	name: string;
	formula: string;
	descriptions: IDescription[];
	levels: IGrowthRateExperienceLevel[];
	pokemon_species: INamedAPIResource[];
}

export interface IGrowthRateExperienceLevel {
	level: number;
	experience: number;
}

export interface INature {
	id: number;
	name: string;
	decreased_stat: INamedAPIResource;
	increased_stat: INamedAPIResource;
	hates_flavor: INamedAPIResource;
	likes_flavor: INamedAPIResource;
	pokeathlon_stat_changes: INatureStatChange[];
	move_battle_style_preferences: IMoveBattleStylePreference[];
	names: IName[];
}

export interface INatureStatChange {
	max_change: number;
	pokeathlon_stat: INamedAPIResource;
}

export interface IMoveBattleStylePreference {
	low_hp_preference: number;
	high_hp_preference: number;
	move_battle_style: INamedAPIResource;
}
export interface IPokeathlonStat {
	id: number;
	name: string;
	names: IName[];
	affecting_natures: INaturePokeathlonStatAffectSets;
}

export interface INaturePokeathlonStatAffectSets {
	increase: INaturePokeathlonStatAffect[];
	decrease: INaturePokeathlonStatAffect[];
}

export interface INaturePokeathlonStatAffect {
	max_change: number;
	nature: INamedAPIResource;
}

export interface IPokemonForm {
	id: number;
	name: string;
	order: number;
	form_order: number;
	is_default: boolean;
	is_battle_only: boolean;
	is_mega: boolean;
	form_name: string;
	pokemon: INamedAPIResource;
	types: IPokemonFormType[];
	sprites: IPokemonFormSprites;
	version_group: INamedAPIResource;
	names: IName[];
	form_names: IName[];
}

export interface IPokemonFormType {
	slot: number;
	type: INamedAPIResource;
}

export interface IPokemonFormSprites {
	front_default: string;
	front_shiny: string;
	back_default: string;
	back_shiny: string;
}

export interface IPokemonHabitat {
	id: number;
	name: string;
	names: IName[];
	pokemon_species: INamedAPIResource[];
}

export interface IPokemonShape {
	id: number;
	name: string;
	awesome_names: IAwesomeName[];
	names: IName[];
	pokemon_species: INamedAPIResource[];
}

export interface IAwesomeName {
	awesome_name: string;
	language: INamedAPIResource;
}

export interface IPokemonSpecies {
	id: number;
	name: string;
	order: number;
	gender_rate: number;
	capture_rate: number;
	base_happiness: number;
	is_baby: boolean;
	is_legendary: boolean;
	is_mythical: boolean;
	hatch_counter: number;
	has_gender_differences: boolean;
	forms_switchable: boolean;
	growth_rate: INamedAPIResource;
	pokedex_numbers: IPokemonSpeciesDexEntry[];
	egg_groups: INamedAPIResource[];
	color: INamedAPIResource;
	shape: INamedAPIResource;
	evolves_from_species: INamedAPIResource;
	evolution_chain: INamedAPIResource; // Assuming APIResource has similar structure to INamedAPIResource
	habitat: INamedAPIResource;
	generation: INamedAPIResource;
	names: IName[];
	pal_park_encounters: IPalParkEncounterArea[];
	flavor_text_entries: IFlavorText[];
	form_descriptions: IDescription[];
	genera: IGenus[];
	varieties: IPokemonSpeciesVariety[];
}

export interface IGenus {
	genus: string;
	language: INamedAPIResource;
}

export interface IPokemonSpeciesDexEntry {
	entry_number: number;
	pokedex: INamedAPIResource;
}

export interface IPalParkEncounterArea {
	base_score: number;
	rate: number;
	area: INamedAPIResource;
}

export interface IPokemonSpeciesVariety {
	is_default: boolean;
	pokemon: INamedAPIResource;
}

export interface IStat {
	id: number;
	name: string;
	game_index: number;
	is_battle_only: boolean;
	affecting_moves: IMoveStatAffectSets;
	affecting_natures: INatureStatAffectSets;
	characteristics: INamedAPIResource[];
	move_damage_class: INamedAPIResource;
	names: IName[];
}

export interface IMoveStatAffectSets {
	increase: IMoveStatAffect[];
	decrease: IMoveStatAffect[];
}
export interface IMoveStatAffect {
	change: number;
	move: INamedAPIResource;
}
export interface INatureStatAffectSets {
	increase: INamedAPIResource[];
	decrease: INamedAPIResource[];
}
export interface IType {
	id: number;
	name: string;
	damage_relations: ITypeRelations;
	past_damage_relations: ITypeRelationsPast[];
	game_indices: IGenerationGameIndex[];
	generation: INamedAPIResource;
	move_damage_class: INamedAPIResource;
	names: IName[];
	pokemon: ITypePokemon[];
	moves: INamedAPIResource[];
}

export interface ITypePokemon {
	slot: number;
	pokemon: INamedAPIResource;
}

export interface ITypeRelations {
	no_damage_to: INamedAPIResource[];
	half_damage_to: INamedAPIResource[];
	double_damage_to: INamedAPIResource[];
	no_damage_from: INamedAPIResource[];
	half_damage_from: INamedAPIResource[];
	double_damage_from: INamedAPIResource[];
}

export interface ITypeRelationsPast {
	generation: INamedAPIResource;
	damage_relations: ITypeRelations;
}

export interface IGenerationGameIndex {
	game_index: number;
	generation: INamedAPIResource;
}

export interface IFlavorText {
	flavor_text: string;
	language: INamedAPIResource;
	version: INamedAPIResource;
}
