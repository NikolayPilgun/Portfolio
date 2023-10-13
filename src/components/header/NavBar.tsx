import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navBarData } from "../../data/dataNavBar";

const itemVariants: Variants = {
	open: {
		opacity: 1,
		y: 0,
		transition: { type: "spring", stiffness: 300, damping: 24 },
	},
	closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function NavBar() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<nav className="relative">
			{/* Desktop Navigation */}
			<ul className="hidden sm:flex justify-end items-center gap-2">
				{navBarData.map((link) => (
					<li key={link.name}>
						<NavLink className="p-3 relative group" to={link.path}>
							{link.name}
							<span className="absolute left-[5%] bottom-2 inline-block w-0  h-[2px] transition-[width] ease-linear duration-300 group-hover:w-[90%]  bg-slate-900 ">
								&nbsp;
							</span>
						</NavLink>
					</li>
				))}
			</ul>

			{/* Mobile Navigation */}

			<div
				className="relative sm:hidden h-6 w-8 cursor-pointer"
				onClick={() => setIsOpen(!isOpen)}
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

			<motion.div
				className="absolute top-9 sm:hidden"
				initial={false}
				animate={isOpen ? "open" : "closed"}
			>
				<motion.ul
					className="w-[150px] flex flex-col gap-5 h-auto px-6 py-4 bg-[#448EA3]"
					variants={{
						open: {
							clipPath: "inset(0% 0% 0% 0% round 10px)",
							transition: {
								type: "spring",
								bounce: 0,
								duration: 0.7,
								delayChildren: 0.3,
								staggerChildren: 0.05,
							},
						},
						closed: {
							clipPath: "inset(10% 50% 90% 50% round 10px)",
							transition: {
								type: "spring",
								bounce: 0,
								duration: 0.3,
							},
						},
					}}
					style={{ pointerEvents: isOpen ? "auto" : "none" }}
				>
					{navBarData.map((link) => (
						<motion.li
							key={link.name}
							variants={itemVariants}
							className="cursor-pointer "
						>
							<NavLink className="relative  py-4 group" to={link.path}>
								{link.name}
								<span className="absolute  left-[5%] bottom-2 inline-block w-0  h-[2px] transition-[width] ease-linear duration-300 group-hover:w-[90%]  bg-slate-900 ">
									&nbsp;
								</span>
							</NavLink>
						</motion.li>
					))}
				</motion.ul>
			</motion.div>
		</nav>
	);
}
