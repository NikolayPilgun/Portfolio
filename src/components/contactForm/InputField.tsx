import { FC } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

type FormValues = {
	name: string;
	email: string;
	yourMessage: string;
};

const InputField: FC<{
	label: string;
	name: keyof FormValues;
	errors: FieldErrors<FormValues>;
	register: UseFormRegister<FormValues>;
}> = ({ label, name, errors, register }) => (
	<label htmlFor={name.toString()} className="text-lg flex flex-col">
		<span>
			{label}
			{errors[name] && errors[name]?.message && (
				<span className="ml-4 text-lg text-red-500">
					{errors[name]?.message}
				</span>
			)}
		</span>
		<input
			{...register(name)}
			type="text"
			id={name.toString()}
			name={name.toString()}
			className="mb-5 border-0 rounded-lg p-3 outline-none text-lg bg-slate-100 focus:bg-[#FFF8E2] transition-all ease-linear duration-300"
		/>
	</label>
);

export default InputField;
