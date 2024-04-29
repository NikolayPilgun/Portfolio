import { socialData } from "../../data/dataContact";
import ContactForm from "../contactForm/ContactForm";
import ContactLink from "./ContactLink";

export default function Contacts() {
	return (
		<main className="flex-grow mt-10 mx-5">
			<h2 className="max-sm:mt-7 text-3xl text-center">Контакты</h2>
			<div className="flex md:flex-row flex-col md:justify-around justify-center items-center gap-8 my-20">
				<article className="grid grid-cols-2 gap-y-[50px] gap-x-[50px] xl:gap-y-[150px] xl:gap-x-[150px] sm:gap-y-[80px] sm:gap-x-[80px]">
					{socialData.map((item, index) => (
						<ContactLink
							key={index}
							linkTo={item.linkTo}
							imgSrc={item.imgSrc}
							imgAlt={item.imgAlt}
							spanTitle={item.spanTitle ? item.spanTitle : null}
						/>
					))}
				</article>
				<article className="max-md:w-full max-md:mt-[60px] flex flex-col justify-center items-center">
					<h3 className="text-xl mb-7 text-center">Связаться со мной</h3>
					<ContactForm />
				</article>
			</div>
		</main>
	);
}
