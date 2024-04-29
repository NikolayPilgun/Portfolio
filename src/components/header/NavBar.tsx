import { motion } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navBarData } from "../../data/dataNavBar";

export default function NavBar() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<nav className="relative">
			{/* Desktop Navigation */}
			<ul className="hidden sm:flex justify-end items-center gap-5">
				{navBarData.map((link) => (
					<li key={link.name}>
						<NavLink className="relative group text-base" to={link.path}>
							{link.name}
							<span className="absolute left-0 -bottom-2 h-[2px] w-full inline-block text-center">
								<span className="inline-block w-0 h-[2px] transition-[width] ease-linear duration-300 group-hover:w-[90%] bg-slate-900 ">
									&nbsp;
								</span>
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

			<div className="sm:hidden w-0">
				<motion.div
					className="w-[190px] absolute top-9 z-40 sm:hidden"
					initial={false}
					animate={isOpen ? "open" : "closed"}
					variants={{
						open: {
							display: "block",
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
								duration: 0.5,
							},
							transitionEnd: {
								display: "none",
							},
						},
					}}
					style={{ pointerEvents: isOpen ? "auto" : "none" }}
				>
					<motion.ul className="flex flex-col items-center justify-around gap-6 py-6 bg-[#448EA3]">
						{navBarData.map((link) => (
							<motion.li key={link.name}>
								<NavLink
									onClick={() => setIsOpen(false)}
									className="relative text-base  group cursor-pointer"
									to={link.path}
								>
									{link.name}
									<span className="absolute left-0 -bottom-2 h-[2px] w-full inline-block text-center">
										<span className="inline-block w-0 h-[2px] transition-[width] ease-linear duration-300 group-hover:w-[90%] bg-slate-900">
											&nbsp;
										</span>
									</span>
								</NavLink>
							</motion.li>
						))}
					</motion.ul>
				</motion.div>
			</div>
		</nav>
	);
}
