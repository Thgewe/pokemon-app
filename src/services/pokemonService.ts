import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IPokemon, IPokemonSpecies, IType } from "../models/IPokemon";
import { IEvolutionChain } from "../models/IEvolution";

export const pokemonAPI = createApi({
	reducerPath: "pokemonAPI",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://pokeapi.co/api/v2",
	}),
	endpoints: (builder) => ({
		getPokemonByName: builder.query<IPokemon, string>({
			query: (name) => ({
				url: "/pokemon/" + name,
			}),
		}),
		getSpeciesByName: builder.query<IPokemonSpecies, string>({
			query: (name) => ({
				url: "/pokemon-species/" + name,
			}),
		}),
		getTypeById: builder.query<IType, string>({
			query: (id) => ({
				url: "/types/" + id,
			}),
		}),
		getEvolutionChainById: builder.query<IEvolutionChain, string>({
			query: (id) => ({
				url: "/evolution-chain/" + id,
			}),
		}),
	}),
});
