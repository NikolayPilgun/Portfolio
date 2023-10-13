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

// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// const MotionLink = motion(Link);
// <MotionLink
// 				to="/"
// 				className="w-7 h-7 bg-slate-50"
// 				animate={{
// 					scale: [1, 2, 2, 1, 1],
// 					rotate: [0, 0, 180, 180, 0],
// 					borderRadius: ["0%", "0%", "50%", "50%", "0%"],
// 				}}
// 				transition={{
// 					duration: 2,
// 					ease: "easeInOut",
// 					times: [0, 0.2, 0.5, 0.8, 1],
// 					repeat: Infinity,
// 					repeatDelay: 1,
// 				}}
// 			/>
