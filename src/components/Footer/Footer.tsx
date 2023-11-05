import React from "react";
import cl from "./footer.module.css";
import { ReactComponent as GitHub } from "../../images/svg/github.svg";

const Footer = () => {
	return (
		<footer className={cl.footer}>
			<div className={cl.content}>
				<h3>Developed by Thgewe</h3>
				<a href={"https://github.com/Thgewe"} title={"My GitHub"}>
					<GitHub />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
