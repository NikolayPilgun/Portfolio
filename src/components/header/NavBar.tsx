import { FC, useState } from "react";
import { navBarData } from "../../data/dataNavBar";
import MobileNavigation from "./MobileNavigation";
import NavLinkItem from "./NavLinkItem";
const NavBar: FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<nav className="relative">
			{/* Desktop Navigation */}
			<ul className="hidden sm:flex justify-end items-center gap-5">
				{navBarData.map((link, index) => (
					<NavLinkItem key={index} link={link} />
				))}
			</ul>

			{/* Mobile Navigation */}

			<div
				className="relative sm:hidden h-6 w-8 cursor-pointer"
				onClick={() => setIsOpen((prevState) => !prevState)}
			>
				<span
					className={`absolute block h-1 w-full rounded-full transition-all bg-slate-950 ${
						isOpen ? "rotate-45 top-[10px]" : "top-0"
					}`}
				></span>
				<span
					className={`absolute  block h-1 w-full rounded-full transition-all bg-slate-950  ${
						isOpen ? "scale-0" : "top-[10px]"
					}`}
				></span>
				<span
					className={`absolute  block h-1 w-full rounded-full transition-all bg-slate-950 ${
						isOpen ? "-rotate-45 top-[10px]" : "bottom-0"
					}`}
				></span>
			</div>

			<div className="sm:hidden w-0">
				<MobileNavigation
					navBarData={navBarData}
					isOpen={isOpen}
					setIsOpen={setIsOpen}
				/>
			</div>
		</nav>
	);
};

export default NavBar;
