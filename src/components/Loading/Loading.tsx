import React from "react";
import cl from "./loading.module.css";

const Loading = () => {
	return (
		<div className={cl.wrapper}>
			<div className={cl.ball}></div>
		</div>
	);
};

export default Loading;
