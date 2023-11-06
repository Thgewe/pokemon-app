import { configureStore } from "@reduxjs/toolkit";
import { pokemonAPI } from "../services/pokemonService";

export const store = configureStore({
	reducer: {
		[pokemonAPI.reducerPath]: pokemonAPI.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(pokemonAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
