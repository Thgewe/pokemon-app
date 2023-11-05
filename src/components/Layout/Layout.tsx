import React, { FC, PropsWithChildren } from "react";
import cl from "./layout.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={cl.layout}>
			<Header />
			<main className={cl.main}>
				<div className={cl.container}>
					{children}
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
