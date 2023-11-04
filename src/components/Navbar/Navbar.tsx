import React from "react";
import cl from "./navbar.module.css";
import { ReactComponent as Pokeball } from "../../images/svg/pokeball.svg";
import { useRef } from "react";
import { EMainPaths } from "../../models/routes_paths";
import { NavLink } from "react-router-dom";

// TODO: different icons

const Navbar = () => {
	const tabs = useRef([
		{
			name: "Items",
			path: EMainPaths.items,
			icon: <Pokeball />,
		},
		{
			name: "Pokedex",
			path: EMainPaths.pokedex,
			icon: <Pokeball />,
		},
		{
			name: "Games",
			path: EMainPaths.games,
			icon: <Pokeball />,
		},
	]);

	return (
		<nav className={cl.navbar}>
			<ul className={cl.list}>
				{tabs.current.map((tab) => (
					<NavLink
						className={cl.tab}
						key={tab.path}
						to={tab.path}
						title={tab.name}
					>
						<li>
							{tab.icon}
							<div>{tab.name}</div>
						</li>
					</NavLink>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
