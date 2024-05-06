import { FC } from "react";
import { NavLink, isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage: FC = () => {
	const error = useRouteError();
	let errorMessage: string;

	if (isRouteErrorResponse(error)) {
		errorMessage = error.data.message || error.statusText;
	} else if (error instanceof Error) {
		errorMessage = error.message;
	} else if (typeof error === "string") {
		errorMessage = error;
	} else {
		console.error(error);
		errorMessage = "Unknown error";
	}

	return (
		<div
			id="error-page"
			className="flex flex-col gap-8 justify-center items-center h-screen"
		>
			<h1 className="text-4xl font-bold">Oops!</h1>
			<p>Извините, произошла непредвиденная ошибка.</p>
			<p className="text-slate-400">
				<i>{errorMessage}</i>
			</p>
			<div className="my-8 cursor-pointer hover:scale-105 transition-all ease-linear duration-300 ">
				<NavLink
					className="px-6 py-4 rounded-lg border-2 border-black border-solid"
					to="/"
				>
					<span className="text-lg font-medium">Главная</span>
				</NavLink>
			</div>
		</div>
	);
};
export default ErrorPage;
