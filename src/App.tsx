import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
}

export default App;
