import { FC } from "react";
import { socialData } from "../../data/dataContact";
import ContactForm from "../contactForm/ContactForm";
import ContactLink from "./ContactLink";

interface SocialDataItem {
	linkTo: string;
	imgSrc: string;
	imgAlt: string;
	spanTitle?: string;
}

const Contacts: FC = () => {
	return (
		<main className="flex-grow mt-10 mx-5">
			<h2 className="text-3xl text-center mt-7 md:mt-0">Контакты</h2>
			<section className="flex flex-col md:flex-row justify-around items-center gap-8 my-20">
				<article className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-y-20 gap-x-8 md:gap-x-20">
					{socialData.map(
						({ linkTo, imgSrc, imgAlt, spanTitle }: SocialDataItem, index) => (
							<ContactLink
								key={index}
								linkTo={linkTo}
								imgSrc={imgSrc}
								imgAlt={imgAlt}
								spanTitle={spanTitle}
							/>
						)
					)}
				</article>
				<aside className="w-full mt-16 md:max-w-md flex flex-col items-center justify-center">
					<h3 className="text-xl mb-7 text-center">Связаться со мной</h3>
					<ContactForm />
				</aside>
			</section>
		</main>
	);
};

export default Contacts;
