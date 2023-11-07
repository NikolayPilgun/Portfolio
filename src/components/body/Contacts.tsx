import { Link } from "react-router-dom";
import ContactForm from "../contactForm/ContactForm";

export default function Contacts() {
	return (
		<div className="flex-grow mt-10 mx-5">
			<h1 className=" max-sm:mt-7 text-3xl text-center">Контакты</h1>
			<div className="flex md:flex-row flex-col md:justify-around justify-center items-center gap-8 my-20">
				<div className="grid grid-cols-2 gap-y-[80px] gap-x-[80px] xl:gap-y-[150px] xl:gap-x-[150px]">
					<Link to="mailto:03198814@mail.ru">
						<img
							className="w-[100px] h-[100px]"
							src="contacts/e-mail.png"
							alt="e-mail"
						/>
					</Link>
					<Link to="https://github.com/NikolayPilgun">
						<img
							className="w-[100px] h-[100px]"
							src="contacts/github.png"
							alt="github"
						/>
					</Link>
					<Link to="https://t.me/NikolayPilgun">
						<img
							className="w-[100px] h-[100px]"
							src="contacts/telegram.png"
							alt="telegram"
						/>
						<span>@NikolayPilgun</span>
					</Link>
					<Link to="https://vk.com/id830020894">
						<img
							className="w-[100px] h-[100px]"
							src="contacts/vk.png"
							alt="vk"
						/>
						<span>id830020894</span>
					</Link>
				</div>
				<div className="max-md:w-full max-md:mt-[60px] flex flex-col justify-center items-center">
					<h2 className="text-xl mb-7 text-center">Связаться со мной</h2>
					<ContactForm />
				</div>
			</div>
		</div>
	);
}
