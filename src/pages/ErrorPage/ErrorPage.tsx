import React from "react";
import { useRouteError } from "react-router-dom";
import { isRouteErrorResponse } from "react-router";
import cl from "./errorPage.module.css";

const ErrorPage = () => {
	const error = useRouteError();

	return (
		<div className={cl.page}>
			<h1>Oops!</h1>
			<p>
				Sorry,{" "}
				{isRouteErrorResponse(error) ? <span>{error.status}</span> : "an unexpected"}{" "}
				error has occurred.
			</p>
			{isRouteErrorResponse(error) && (
				<p>
					<i>{error.data}</i>
				</p>
			)}
		</div>
	);
};

export default ErrorPage;
