import CubeLogo from "../cubeLogo/CubeLogo";
import NavBar from "./NavBar";

export default function Header() {
	return (
		<header className="w-full flex justify-between items-center gap-5 px-10 py-7">
			<NavBar />
			<div className="relative">
				<CubeLogo />
			</div>
		</header>
	);
}
