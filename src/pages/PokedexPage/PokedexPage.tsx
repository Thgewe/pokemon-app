import React from "react";
import {Outlet} from "react-router-dom";

const PokedexPage = () => {
	return (
		<div>
			<h1>Pokédex</h1>
			<div>
				<Outlet />
			</div>
		</div>
	);
};

export default PokedexPage;