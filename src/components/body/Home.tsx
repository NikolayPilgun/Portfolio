export default function Home() {
	return (
		<div className="flex-grow mt-10">
			<main className="flex lg:flex-row flex-col flex-wrap justify-between items-center">
				<div className="lg:flex-[0_1_50%] w-full h-auto">
					<img src="/public/home/hero1.svg" alt="hero" />
				</div>
				<div className="lg:flex-[0_1_50%] w-full h-auto">
					<h1 className="text-2xl text-center">Главная страница</h1>
				</div>
			</main>
		</div>
	);
}
