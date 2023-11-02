import { motion } from "framer-motion";
import { codingSkillsData, profSkillsData } from "../../data/dataAboutMe";
export default function AboutMe() {
	return (
		<div className="flex-grow mt-10 mb-32">
			<main className="flex md:flex-row flex-col justify-center items-center gap-5 mx-5">
				<div className="">
					<div className="max-w-lg">
						<motion.h1
							className="md:text-5xl text-3xl mb-3"
							initial={{ opacity: 0, y: -100 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 1,
								delay: 0.5,
							}}
						>
							Обо мне
						</motion.h1>
						<h2 className="md:text-2xl text-xl mb-5">
							Меня зовут Николай и я Frontend Разработчик
						</h2>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
							beatae alias maxime? Sed facere voluptates laborum odio voluptatum
							natus obcaecati minus, soluta quam delectus asperiores ipsa nemo.
							Voluptas, quasi dolore.
						</p>
						<p className="mt-3">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
							beatae alias maxime? Sed facere voluptates laborum odio voluptatum
							natus obcaecati minus, soluta quam delectus asperiores ipsa nemo.
							Voluptas, quasi dolore.
						</p>
					</div>
				</div>
				<div className="md:order-1 -order-1">
					<img
						className="h-[600px]"
						src="aboutMe/aboutMePhoto.png"
						alt="aboutMePhoto"
					/>
				</div>
			</main>
			<div className="my-10 mx-10 text-center">
				<h2 className="text-5xl font-medium my-7">Мои навыки</h2>
				<div className="flex flex-wrap justify-around items-start gap-5">
					<section className="sm:w-[400px] w-full">
						<h3 className="text-2xl my-7">Технические навыки</h3>
						<div className="w-full h-auto border-4 border-solid rounded-md border-sky-900">
							{codingSkillsData.map((item) => (
								<div
									key={`${item.name}${item.level}`}
									className="w-full px-4 py-5"
								>
									<h4 className="flex justify-between items-center text-left">
										{item.name} <span>{item.level}%</span>
									</h4>
									<div className="w-full h-3 border-2  border-solid border-sky-900 rounded-md overflow-hidden">
										<motion.div
											className="h-2 bg-amber-400"
											// style={{ width: `${item.level}%` }}
											initial={{ width: 0 }}
											whileInView={{ width: `${item.level}%` }}
											viewport={{ amount: 0.2, once: true }}
											transition={{
												duration: 1,
												delay: 0.5,
											}}
										></motion.div>
									</div>
								</div>
							))}
						</div>
					</section>
					<section className="sm:w-[400px] w-full">
						<h3 className="text-2xl my-7">Дополнительные навыки</h3>
						<div className="w-full h-auto border-4 border-solid rounded-md border-sky-900">
							{profSkillsData.map((item) => (
								<div
									key={`${item.name}${item.level}`}
									className="w-full px-4 py-5"
								>
									<h4 className="flex justify-between items-center text-left">
										{item.name} <span>{item.level}%</span>
									</h4>
									<div className="w-full h-3 border-2  border-solid border-sky-900 rounded-md overflow-hidden">
										<motion.div
											className="block h-2 bg-amber-400"
											// style={{ width: `${item.level}%` }}
											initial={{ width: 0 }}
											whileInView={{ width: `${item.level}%` }}
											viewport={{ amount: 0.2, once: true }}
											transition={{
												duration: 1,
												delay: 0.5,
											}}
										></motion.div>
									</div>
								</div>
							))}
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
