import React from "react";
import { Outlet } from "react-router-dom";
import "./app.css";
import Layout from "./components/Layout/Layout";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import {ETheme} from "./models/theme";

interface IAppProps {
	error?: boolean
}

function App({error}: IAppProps) {
	return (
		<div className={"app"} id={"root-app"} data-theme={ETheme.default}>
			<Layout>
				{error
					? <ErrorPage />
					: <Outlet />
				}
			</Layout>
		</div>
	);
}

export default App;
