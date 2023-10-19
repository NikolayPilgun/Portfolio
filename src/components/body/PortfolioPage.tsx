import { useParams } from "react-router-dom";
import { siteCardData } from "../../data/dataPortfolio";

export default function PortfolioPage() {
	const dataPage = useParams().pageId;
	const dataPageArr = siteCardData.filter((item) => item.path === dataPage);

	return (
		<div>
			<div className="flex flex-col justify-center items-center">
				<span>{dataPageArr[0].name}</span>
				<span>{dataPageArr[0].siteType}</span>
				<div className="w-[500px]">
					<img
						src={dataPageArr[0].firstPicture}
						alt={dataPageArr[0].siteType}
					/>
				</div>
			</div>
		</div>
	);
}
