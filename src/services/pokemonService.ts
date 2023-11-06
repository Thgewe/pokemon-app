import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IListOfResources, IPokemon, IPokemonSpecies, IType} from "../models/IPokemon";
import { IEvolutionChain } from "../models/IEvolution";

// TODO: direct url instead of id

export const pokemonAPI = createApi({
	reducerPath: "pokemonAPI",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://pokeapi.co/api/v2",
	}),
	endpoints: (builder) => ({
		getPokemonList: builder.query<IListOfResources, string>({
			query: (url) => ({
				url,
			}),
			serializeQueryArgs: ({endpointName}) => endpointName,
			merge: (currentCacheData, newData) => {
				currentCacheData.next = newData.next;
				currentCacheData.previous = newData.previous;
				currentCacheData.results.push(...newData.results);
			},
			forceRefetch({currentArg, previousArg}) {
				return currentArg !== previousArg;
			}
		}),
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
