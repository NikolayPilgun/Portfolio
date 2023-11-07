import { motion } from "framer-motion";
import { codingSkillsData, profSkillsData } from "../../data/dataAboutMe";
import Counter from "../counter/Counter";
export default function AboutMe() {
	return (
		<div className="flex-grow mt-10 mb-32">
			<main className="flex md:flex-row flex-col justify-center items-center gap-5 mx-5">
				<div>
					<div className="max-w-[600px]">
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
						<h2 className="md:text-2xl text-xl mb-4">
							Меня зовут Николай и я Frontend Разработчик
						</h2>
						<p className="mb-2">Практический опыт в разработке: 1 год</p>

						<p className="mb-3">
							Окончил Самарский государственный архитектурно-строительный
							Университет. Квалификация: инженер по специальности Промышленное и
							Гражданское строительство.
						</p>

						<p className="mb-3">
							Долгое время работал по полученной специальности. Участвовал в
							строительстве крупных нефтегазовых объектов и их инфраструктуре.
							Благодаря чему получил огромный опыт работы в команде и опыт
							управления командой. Последнее место работы - начальник отдела
							подготовки производства.
						</p>

						<p className="mb-3">
							Моё знакомство с программированием началось ещё в университете с
							языка C / C++. Программирование привлекает меня скоростью
							получения результата, огромным набором вариантов выполнения одной
							и той же задачи, а также тем, что всегда есть куда развиваться.
							Немного позже я заинтересовался web-разработкой. Изучил такие
							языки, как Javascript, HTML и CSS. Web-разработка стала моим
							хобби.
						</p>

						<p className="mb-3">
							С течением времени интерес к программированию только нарастал. Я
							принял решение превратить своё хобби в свою профессию.
						</p>
						<p>Свободное время уделяю спорту, саморазвитию и фотографиям.</p>
						<p>
							Готов использовать свои знания и навыки для достижения целей вашей
							компании.
						</p>
					</div>
				</div>
				<div className="md:order-1 -order-1">
					<img
						className="min-w-[260px] h-[600px]"
						src="/aboutMe/aboutMe.png"
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
										{item.name}
										<span>
											<Counter value={item.level} />%
										</span>
									</h4>
									<div className="w-full h-3 border-2 border-solid border-sky-900 rounded-md overflow-hidden">
										<motion.div
											className="h-2 bg-amber-400"
											initial={{ width: 0 }}
											whileInView={{ width: `${item.level}%` }}
											viewport={{ amount: 0.2, once: true }}
											transition={{
												duration: 1.3,
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
										{item.name}
										<span>
											<Counter value={item.level} />%
										</span>
									</h4>
									<div className="w-full h-3 border-2 border-solid border-sky-900 rounded-md overflow-hidden">
										<motion.div
											className="block h-2 bg-amber-400"
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
