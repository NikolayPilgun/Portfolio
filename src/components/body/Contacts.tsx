import { socialData } from "../../data/dataContact";
import ContactForm from "../contactForm/ContactForm";
import ContactLink from "./ContactLink";

export default function Contacts() {
	return (
		<div className="flex-grow mt-10 mx-5">
			<h1 className="max-sm:mt-7 text-3xl text-center">Контакты</h1>
			<div className="flex md:flex-row flex-col md:justify-around justify-center items-center gap-8 my-20">
				<div className="grid grid-cols-2 gap-y-[80px] gap-x-[80px] xl:gap-y-[150px] xl:gap-x-[150px]">
					{socialData.map((item, index) => (
						<ContactLink
							key={index}
							linkTo={item.linkTo}
							imgSrc={item.imgSrc}
							imgAlt={item.imgAlt}
							spanTitle={item.spanTitle ? item.spanTitle : null}
						/>
					))}
				</div>
				<div className="max-md:w-full max-md:mt-[60px] flex flex-col justify-center items-center">
					<h2 className="text-xl mb-7 text-center">Связаться со мной</h2>
					<ContactForm />
				</div>
			</div>
		</div>
	);
}
