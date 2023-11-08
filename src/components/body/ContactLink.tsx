import { Link } from "react-router-dom";
export default function ContactLink({
	linkTo,
	imgSrc,
	imgAlt,
	spanTitle,
}: {
	linkTo: string;
	imgSrc: string;
	imgAlt: string;
	spanTitle: string | null;
}) {
	return (
		<Link to={linkTo}>
			<img className="w-[100px] h-[100px]" src={imgSrc} alt={imgAlt} />
			{spanTitle ? <span>{spanTitle}</span> : null}
		</Link>
	);
}
