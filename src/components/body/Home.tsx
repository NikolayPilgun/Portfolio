import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
	return (
		<div className="flex-grow mt-10 xl:mb-1 mb-10">
			<main className="flex xl:flex-row flex-col flex-wrap justify-between items-center">
				<div className="xl:flex-[0_1_50%] w-full h-auto">
					<img src="/home/hero1.svg" alt="hero" />
				</div>
				<div className="xl:flex-[0_1_50%] w-full h-auto">
					<div className="ml-10 mr-6 mt-8 xl:mt-1">
						<motion.h1
							className="md:text-5xl text-3xl mb-3"
							initial={{ opacity: 0, y: -100 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 1,
								delay: 0.5,
							}}
						>
							Привет, я Николай Пильгун
						</motion.h1>
						<motion.h2
							className="md:text-2xl text-xl mb-5"
							initial={{ opacity: 0, x: 100 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{
								duration: 1,
								delay: 1.2,
							}}
						>
							Frontend Разработчик
						</motion.h2>
						<motion.p
							initial={{ opacity: 0, scale: 0.5 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								duration: 0.8,
								delay: 0.5,
							}}
						>
							Как Frontend разработчик, я стремлюсь превращать идеи в
							инновационные web-приложения. Изучите мои последние проекты, они
							продемонстрируют мой опыт в React.js и web-разработке.
						</motion.p>
						<motion.div
							className="flex sm:flex-row flex-col sm:justify-start justify-center items-center gap-8 mt-8"
							initial={{ opacity: 0, y: 100 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 1,
								delay: 1,
							}}
						>
							<Link
								className="flex justify-between items-center gap-4 px-5 py-3 text-lg bg-slate-800 text-white rounded-md active:scale-95 hover:text-[#c4c4c4] transition-all duration-300 group"
								to="/resume.pdf"
								download={true}
								target="_blank"
							>
								Резюме
								<span>
									<img
										className="w-5 h-5 group-hover:scale-125 transition-all duration-300 "
										src="/public/logo/logoFile.png"
										alt="logoFile"
									/>
								</span>
							</Link>
							<Link
								className="relative group py-3 text-lg hover:text-orange-600 transition-all duration-300"
								to="mailto:03198814@mail.ru"
							>
								Связаться со мной
								<span className="absolute h-[2px] left-0 bottom-1 w-full inline-block text-center">
									<span className="inline-block w-0 h-[2px] transition-[width] ease-linear duration-300 group-hover:w-[90%]  bg-slate-900 ">
										&nbsp;
									</span>
								</span>
							</Link>
						</motion.div>
					</div>
				</div>
			</main>
		</div>
	);
}
