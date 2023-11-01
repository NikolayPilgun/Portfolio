import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function ContactForm() {
	const form = useRef<HTMLFormElement | null>(null);

	const sendEmail = (e: React.FormEvent) => {
		e.preventDefault();

		emailjs
			.sendForm(
				import.meta.env.VITE_SERVICE_ID,
				import.meta.env.VITE_TEMPLATE_ID,
				form.current ? form.current : "",
				import.meta.env.VITE_PUBLIC_KEY
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	return (
		<form
			className="sm:w-[450px] w-full flex flex-col"
			ref={form}
			onSubmit={sendEmail}
		>
			<label className="text-lg" htmlFor="name">
				Ваше имя
			</label>
			<input
				className="mb-5 border-0 rounded-lg p-3 outline-none text-lg bg-slate-100 focus:bg-[#FFF8E2] transition-all ease-linear duration-300"
				type="text"
				name="name"
				id="name"
				placeholder="Ваше имя"
			/>

			<label className="text-lg" htmlFor="email">
				Ваш Email
			</label>
			<input
				className="mb-5 border-0 rounded-lg p-3 outline-none text-lg bg-slate-100 focus:bg-[#FFF8E2] transition-all ease-linear duration-300"
				type="email"
				name="email"
				id="email"
				placeholder="example@mail.com"
			/>

			<label className="text-lg" htmlFor="message">
				Ваше сообщение
			</label>
			<textarea
				className="h-[150px] mb-5 border-0 rounded-lg p-3 outline-none text-lg bg-slate-100 focus:bg-[#FFF8E2] transition-all ease-linear duration-300"
				id="message"
				name="message"
			/>

			<button
				className="w-[150px] mx-auto py-3 rounded-xl bg-black text-white cursor-pointer active:scale-95 hover:text-orange-400 transition-all ease-linear duration-300"
				type="submit"
			>
				Отправить
			</button>
		</form>
	);
}
