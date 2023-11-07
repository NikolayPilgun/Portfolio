import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
	name: z
		.string()
		.regex(/^[а-яА-Яa-zA-Z\s.]+$/, {
			message: "Недопустимые символы",
		})
		.min(3, { message: "Имя слишком короткое" })
		.max(30, { message: "Имя слишком длинное" }),
	email: z
		.string()
		.email("Невалидный Email")
		.min(3, { message: "Email слишком короткий" })
		.max(20, { message: "Email слишком длинный" }),
	yourMessage: z
		.string()
		.regex(/^[а-яА-Яa-zA-Z0-9\s!.?]+$/, {
			message: "Недопустимые символы",
		})
		.min(5, { message: "Сообщение слишком короткое" })
		.max(300, { message: "Сообщение слишком длинное" }),
});

type FormSchema = z.infer<typeof formSchema>;

export default function ContactForm() {
	const [emailSent, setEmailSent] = useState(false);
	const form = useRef<HTMLFormElement | null>(null);
	const {
		register,
		handleSubmit,
		reset,
		formState: { isDirty, isSubmitting, errors },
	} = useForm<FormSchema>({ resolver: zodResolver(formSchema) });
	console.log(emailSent);

	const sendEmail = () => {
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
		setEmailSent(true);
	};

	const onSubmit: SubmitHandler<FormSchema> = () => {
		sendEmail();
		reset();
	};

	return (
		<form
			className="sm:w-[450px] w-full flex flex-col"
			ref={form}
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className="flex flex-col">
				{errors.name ? (
					<span role="alert" className="text-lg text-red-500">
						{errors.name?.message}
					</span>
				) : (
					<label htmlFor="name" className="text-lg">
						Ваше имя
					</label>
				)}

				<input
					{...register("name")}
					type="text"
					id="name"
					name="name"
					placeholder="Ваше имя"
					aria-invalid={errors.name ? "true" : "false"}
					className="mb-5 border-0 rounded-lg p-3 outline-none text-lg bg-slate-100 focus:bg-[#FFF8E2] transition-all ease-linear duration-300"
				/>
			</div>

			<div className="flex flex-col">
				{errors.email ? (
					<span role="alert" className="text-lg text-red-500">
						{errors.email?.message}
					</span>
				) : (
					<label htmlFor="email" className="text-lg">
						Ваш Email
					</label>
				)}

				<input
					{...register("email")}
					type="text"
					id="email"
					name="email"
					placeholder="example@mail.com"
					aria-invalid={errors.email ? "true" : "false"}
					className="mb-5 border-0 rounded-lg p-3 outline-none text-lg bg-slate-100 focus:bg-[#FFF8E2] transition-all ease-linear duration-300"
				/>
			</div>

			<div className="flex flex-col">
				{errors.yourMessage ? (
					<span role="alert" className="text-lg text-red-500">
						{errors.yourMessage?.message}
					</span>
				) : (
					<label htmlFor="yourMessage" className="text-lg">
						Ваше сообщение
					</label>
				)}

				<textarea
					{...register("yourMessage")}
					id="yourMessage"
					name="yourMessage"
					aria-invalid={errors.yourMessage ? "true" : "false"}
					className="h-[150px] mb-5 border-0 rounded-lg p-3 outline-none text-lg bg-slate-100 focus:bg-[#FFF8E2] transition-all ease-linear duration-300"
				/>
			</div>
			{emailSent ? (
				<h3 className="text-lg text-lime-600 text-center">Email отправлен.</h3>
			) : (
				<button
					className="w-[150px] mx-auto py-3 rounded-xl bg-black text-white cursor-pointer active:scale-95 hover:text-orange-400 transition-all ease-linear duration-300"
					type="submit"
					disabled={!isDirty || isSubmitting}
				>
					Отправить
				</button>
			)}
		</form>
	);
}
