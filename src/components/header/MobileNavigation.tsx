import { motion } from "framer-motion";
import { FC } from "react";
import { NavLink } from "react-router-dom";

interface MobileNavigationProps {
	navBarData: { name: string; path: string }[];
	isOpen: boolean;
	setIsOpen: (value: boolean) => void;
}

const MobileNavigation: FC<MobileNavigationProps> = ({
	navBarData,
	isOpen,
	setIsOpen,
}) => {
	return (
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
				{navBarData.map((link, index) => (
					<motion.li key={index}>
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
	);
};

export default MobileNavigation;
