import React from "react";
import App from "../App";
import { RouteObject } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import PokedexPage from "../pages/PokedexPage/PokedexPage";
import GamesPage from "../pages/GamesPage/GamesPage";
import PokemonPage from "../pages/PokemonPage/PokemonPage";
import { EMainPaths, EPaths, EPokedexPaths } from "../models/routes_paths";

export const routes: RouteObject[] = [
	{
		path: EPaths.main,
		element: <App />,
		errorElement: <App error={true} />,
		children: [
			{
				path: EMainPaths.items,
				element: <HomePage />,
			},
			{
				path: EMainPaths.pokedex,
				element: <PokedexPage />,
				children: [
					{
						path: EPokedexPaths.pokemon,
						element: <PokemonPage />,
					},
				],
			},
			{
				path: EMainPaths.games,
				element: <GamesPage />,
			},
		],
	},
];
