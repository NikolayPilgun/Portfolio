import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import AboutMe from "./components/body/AboutMe.tsx";
import Contacts from "./components/body/Contacts.tsx";
import Home from "./components/body/Home.tsx";
import Portfolio from "./components/body/Portfolio.tsx";
import PortfolioPage from "./components/body/PortfolioPage.tsx";
import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "aboutMe",
				element: <AboutMe />,
			},
			{
				path: "portfolio",
				element: <Portfolio />,
			},
			{
				path: "/:pageId",
				element: <PortfolioPage />,
			},
			{
				path: "contacts",
				element: <Contacts />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
