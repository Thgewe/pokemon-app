import React from "react";
import cl from "./header.module.css";
import Navbar from "../Navbar/Navbar";
import { ReactComponent as Logo } from "../../images/svg/pokemon-logo.svg";
import {Link} from "react-router-dom";
import {EPaths} from "../../models/routes_paths";

const Header = () => {
	return (
		<header className={cl.header}>
			<div className={cl.content}>
				<Link
					to={EPaths.main}
					className={cl.logo}
					title={"home"}
				>
					<Logo />
				</Link>
				<Navbar />
				<div>Theme</div>
			</div>
		</header>
	);
};

export default Header;
