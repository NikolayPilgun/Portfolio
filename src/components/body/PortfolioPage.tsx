import { useParams } from "react-router-dom";
import { siteCardData } from "../../data/dataPortfolio";
import SliderCarousel from "../sliderCarousel/sliderCarousel";

export default function PortfolioPage() {
	const dataPage = useParams().pageId;
	const dataPageArr = siteCardData.filter((item) => item.path === dataPage)[0];

	return (
		<div className="flex-grow mt-10 mb-20">
			<div className="flex flex-col justify-center items-center">
				<h1 className="text-3xl sm:my-5 my-10 mx-3 text-center">
					{dataPageArr.siteType}
				</h1>
				<div className="w-[80%]  mx-auto ">
					<SliderCarousel dataSlider={dataPageArr.pictures} />
				</div>
				<div className="my-8 rounded-lg border-4 cursor-pointer border-black border-solid active:scale-90 transition-all ease-linear duration-300 group">
					<a
						className="flex items-center gap-3 px-4 py-2 "
						href={dataPageArr.github}
					>
						<span className="text-xl font-medium">GitHub</span>
						<span className="h-[40px] w-[40px] relative">
							<img
								className="absolute top-0 left-0 opacity-100 group-hover:opacity-0 transition-all ease-linear duration-500 "
								src="logo/gitLogo1.png"
								alt="gitLogo1"
							/>
							<img
								className="opacity-0 group-hover:opacity-100 transition-all ease-linear duration-500"
								src="logo/gitLogo2.png"
								alt="gitLogo2"
							/>
						</span>
					</a>
				</div>

				<div className="w-full mb-10">
					<h2 className="text-2xl ml-[10%] mb-5">Краткое описание</h2>
					<div className="flex flex-col justify-center items-center gap-6 ml-[12%] mr-[10%] sm:w-[530px] ">
						{dataPageArr.siteTTX.map((item, index) => (
							<p
								key={index}
								className="w-full flex justify-between gap-10 text-lg border-b-4 border-[#A68C42]"
							>
								<span>{item.title}:</span>
								<span>{item.content}</span>
							</p>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
