import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { ISiteCard, filterData, siteCardData } from "../../data/dataPortfolio";

const Portfolio: FC = () => {
	const [count, setCount] = useState<number>(0);
	const [siteCard, setSiteCard] = useState<ISiteCard[]>(siteCardData);

	function filterOnClick(index: number, name: string) {
		setCount(index);
		setSiteCard(
			name === "Все работы"
				? siteCardData
				: siteCardData.filter((item) => item.name === name)
		);
	}

	return (
		<main className="flex-grow mt-10 mb-20">
			<h2 className="text-3xl text-center my-8">Портфолио</h2>
			<div className="w-full mb-10">
				<ul className="w-[80%] mx-auto flex flex-wrap justify-center items-center gap-6 py-5 text-[#E1F7FD] bg-[#4A5CA5] text-xl font-medium">
					{filterData.map((item, index) => (
						<li
							key={`${item.name}${index}`}
							className="cursor-pointer hover:scale-110 transition-all duration-300"
							style={{ color: count === index ? "#FFB061" : "#E1F7FD" }}
							onClick={() => filterOnClick(index, item.name)}
						>
							{item.name}
						</li>
					))}
				</ul>
			</div>

			<section className="flex flex-wrap justify-around items-center gap-10 mx-5">
				{siteCard.map((item) => (
					<article
						key={item.id}
						className="relative w-[400px] h-[420px] max-[360px]:h-[300px]  overflow-hidden  bg-[#EBEFFE] shadow-lg shadow-blue-500/50 cursor-pointer group"
					>
						<img
							className="absolute top-0 left-0 z-10"
							src={item.pictures[0]}
							alt={`${item.siteType}${item.id}`}
						/>
						<img
							className="absolute bottom-0 left-0"
							src={item.pictures[1]}
							alt={`${item.siteType}${item.id}`}
						/>

						<div className="flex flex-col justify-around items-center gap-4 p-3 w-full h-full absolute right-full group-hover:right-0 transition-all ease-linear duration-300 top-0 z-20 bg-opacity-60 bg-slate-300">
							<h3 className="text-2xl font-medium text-center">
								{item.siteType}
							</h3>
							<h4 className="text-xl font-normal text-center">
								Сайт разработан на {item.name}
							</h4>

							<Link
								className="px-4 py-3 bg-slate-950 bg-opacity-100 hover:scale-110 transition-all ease-linear duration-300 rounded-md text-white"
								to={`/${item.path}`}
							>
								Подробнее
							</Link>
						</div>
					</article>
				))}
			</section>
		</main>
	);
};

export default Portfolio;
