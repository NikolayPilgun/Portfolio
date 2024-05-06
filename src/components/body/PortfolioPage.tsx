import { FC } from "react";
import { useParams } from "react-router-dom";
import { siteCardData } from "../../data/dataPortfolio";
import SliderCarousel from "../sliderCarousel/sliderCarousel";

const PortfolioPage: FC = () => {
	const { pageId } = useParams();
	const [dataPageArr] = siteCardData.filter((item) => item.path === pageId);

	return (
		<article className="flex-grow mt-10 mb-20">
			<section className="flex flex-col justify-center items-center">
				<h2 className="text-3xl sm:my-5 my-10 mx-3 text-center">
					{dataPageArr.siteType}
				</h2>
				<div className="w-[80%]  mx-auto">
					<SliderCarousel dataSlider={dataPageArr.pictures} />
				</div>
				<div className="my-8 cursor-pointer rounded-lg border-4  border-black border-solid active:scale-90 transition-all ease-linear duration-300 group">
					<a
						className="flex items-center gap-3 px-4 py-2"
						href={dataPageArr.github}
					>
						<span className="text-xl font-medium">GitHub</span>
						<span className="h-[40px] w-[40px] relative">
							<img
								className="absolute top-0 left-0 opacity-100 group-hover:opacity-0 transition-all ease-linear duration-500"
								src="pictures/gitLogo1.png"
								alt="gitLogo1"
							/>
							<img
								className="opacity-0 group-hover:opacity-100 transition-all ease-linear duration-500"
								src="pictures/gitLogo2.png"
								alt="gitLogo2"
							/>
						</span>
					</a>
				</div>

				<div className="w-full mb-10">
					<h3 className="text-2xl ml-[10%] mb-5">Краткое описание</h3>
					<div className="flex flex-col justify-center items-center gap-6 ml-[12%] mr-[10%] sm:w-[530px] ">
						{dataPageArr.siteTTX.map((item) => (
							<p
								key={item.title}
								className="w-full flex justify-between gap-5 text-lg border-b-4 border-[#A68C42]"
							>
								<span className="text-left">{item.title}:</span>
								<span className="text-right">{item.content}</span>
							</p>
						))}
					</div>
				</div>
			</section>
		</article>
	);
};
export default PortfolioPage;
