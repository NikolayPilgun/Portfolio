export default function Footer() {
	return (
		<footer className="flex sm:flex-row flex-col justify-between items-center gap-5 px-8 py-5 text-slate-200">
			<div>
				<a href="https://github.com/NikolayPilgun">
					<img
						className="h-[60px]"
						src="pictures/gitLogo1.png"
						alt="gitLogo1"
					/>
				</a>
			</div>
			<h2 className="text-lg text-center">
				&copy; {new Date().getFullYear()} Николай Пильгун
			</h2>
		</footer>
	);
}
