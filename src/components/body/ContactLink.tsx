import { FC } from "react";
import { Link } from "react-router-dom";

interface ContactLinkProps {
	linkTo: string;
	imgSrc: string;
	imgAlt: string;
	spanTitle?: string;
}

const ContactLink: FC<ContactLinkProps> = ({
	linkTo,
	imgSrc,
	imgAlt,
	spanTitle,
}) => {
	return (
		<Link to={linkTo} role="link" aria-label={spanTitle || "Ссылка"}>
			<img className="w-20 h-20" src={imgSrc} alt={`Иконка ${imgAlt}`} />
			{spanTitle && <span className="text-sm">{spanTitle}</span>}
		</Link>
	);
};

export default ContactLink;
