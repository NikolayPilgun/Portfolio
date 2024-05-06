import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "./InputField";

type FormSchema = z.infer<typeof formSchema>;

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

const ContactForm: FC = () => {
	const [emailSent, setEmailSent] = useState(false);
	const [loading, setLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormSchema>({ resolver: zodResolver(formSchema) });
	const formRef = useRef<HTMLFormElement>(null);

	const sendEmail = async () => {
		try {
			setLoading(true);
			if (!formRef.current) {
				console.error("Form reference is not available.");
				return;
			}

			const response = await emailjs.sendForm(
				import.meta.env.VITE_SERVICE_ID,
				import.meta.env.VITE_TEMPLATE_ID,
				formRef.current,
				import.meta.env.VITE_PUBLIC_KEY
			);

			if (response.status === 200) {
				setEmailSent(true);
				setErrorMessage(null);
			} else {
				setErrorMessage(
					"При отправке письма произошла ошибка. Попробуйте еще раз."
				);
			}
		} catch (error) {
			setErrorMessage("Ошибка при отправке письма. Попробуйте еще раз.");
			console.error("Error sending email:", error);
		} finally {
			setLoading(false);
		}
	};

	const onSubmit: SubmitHandler<FormSchema> = () => {
		sendEmail();
		reset();
	};

	return (
		<form
			className="sm:w-[450px] w-full flex flex-col"
			ref={formRef}
			onSubmit={handleSubmit(onSubmit)}
		>
			{errorMessage && (
				<div className="text-lg text-red-500 text-center mb-5">
					{errorMessage}
				</div>
			)}

			<InputField
				label="Ваше имя"
				name="name"
				errors={errors}
				register={register}
			/>
			<InputField
				label="Ваш Email"
				name="email"
				errors={errors}
				register={register}
			/>

			<label htmlFor="yourMessage" className="text-lg flex flex-col">
				<span>
					Ваше сообщение
					{errors.yourMessage && (
						<span className="ml-4 text-lg text-red-500">
							{errors.yourMessage?.message}
						</span>
					)}
				</span>
				<textarea
					{...register("yourMessage")}
					id="yourMessage"
					name="yourMessage"
					aria-invalid={errors.yourMessage ? "true" : "false"}
					className="h-[150px] mb-5 border-0 rounded-lg p-3 outline-none text-lg bg-slate-100 focus:bg-[#FFF8E2] transition-all ease-linear duration-300"
				/>
			</label>

			<div className="h-12 text-center">
				{loading ? (
					<div className="flex flex-col items-center justify-center my-4">
						<div className="inline-block animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-orange-400"></div>
						<div className="mt-2 text-lg text-gray-600">Отправка...</div>
					</div>
				) : emailSent ? (
					<h3 className="text-lg text-lime-600 text-center">
						Email отправлен.
					</h3>
				) : (
					<input
						type="submit"
						className="w-[150px] mx-auto py-3 rounded-xl bg-black text-white cursor-pointer active:scale-95 hover:text-orange-400 transition-all ease-linear duration-300"
						value="Отправить"
					/>
				)}
			</div>
		</form>
	);
};

export default ContactForm;
