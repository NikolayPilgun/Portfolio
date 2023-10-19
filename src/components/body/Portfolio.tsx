import { useState } from "react";
import { Link } from "react-router-dom";
import { filterData, siteCardData } from "../../data/dataPortfolio";

export default function Portfolio() {
	const [count, setCount] = useState(0);
	function filterOnClick(index: number, name: string) {
		setCount(index);
		console.log(name);
	}

	return (
		<div className="flex-grow mt-10 mb-20">
			<h1 className="text-3xl text-center my-8">Портфолио</h1>
			<div className="w-full mb-10">
				<ul className="w-[80%] mx-auto flex flex-wrap justify-center items-center gap-6 py-5 text-[#E1F7FD] bg-[#4A5CA5] text-xl font-medium">
					{filterData.map((item, index) => (
						<li
							key={item.name}
							className="cursor-pointer hover:scale-110 transition-all duration-300"
							style={{ color: count === index ? "#FFB061" : "#E1F7FD" }}
							onClick={() => filterOnClick(index, item.name)}
						>
							{item.name}
						</li>
					))}
				</ul>
			</div>
			<div className="flex flex-wrap justify-around items-center gap-10 mx-5">
				{siteCardData.map((item) => (
					<div
						key={item.id}
						className="relative w-[400px] h-[420px] max-[360px]:h-[300px]  overflow-hidden  bg-[#EBEFFE] shadow-lg shadow-blue-500/50 cursor-pointer group"
					>
						<img
							className="absolute top-0 left-0 z-10"
							src={item.firstPicture}
							alt={item.siteType}
						/>
						<img
							className="absolute bottom-0 left-0"
							src={item.secondPicture}
							alt={item.siteType}
						/>
						<div className="flex flex-col justify-around items-center gap-4 p-3 w-full h-full absolute right-full group-hover:right-0 transition-all ease-linear duration-300 top-0 z-20 bg-opacity-60 bg-slate-300">
							<h2 className="text-2xl font-medium text-center">
								{item.siteType}
							</h2>
							<h3 className="text-xl font-normal text-center">
								Сайт разработан на {item.name}
							</h3>
							<Link
								className="px-4 py-3 bg-slate-950 bg-opacity-100 hover:scale-110 transition-all ease-linear duration-300 rounded-md text-white"
								to={`/${item.path}`}
							>
								Подробнее
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
