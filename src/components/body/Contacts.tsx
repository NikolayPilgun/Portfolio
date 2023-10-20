export default function Contacts() {
	return (
		<div className="flex-grow mt-10 mx-5">
			<h2 className="text-2xl text-center">Контакты</h2>
			<div className="flex justify-around items-center gap-10 my-20">
				<div className="grid grid-cols-2 gap-y-[150px] gap-x-[150px]">
					<img
						className="w-[100px] h-[100px]"
						src="contacts/e-mail.png"
						alt="e-mail"
					/>
					<img
						className="w-[100px] h-[100px]"
						src="contacts/github.png"
						alt="github"
					/>
					<img
						className="w-[100px] h-[100px]"
						src="contacts/telegram.png"
						alt="telegram"
					/>
					<img className="w-[100px] h-[100px]" src="contacts/vk.png" alt="vk" />
				</div>
				<div className="">
					<img src="contacts/contact1.png" alt="contact1" />
				</div>
			</div>
		</div>
	);
}
