import { motion } from "framer-motion";
import {
	aboutMeData,
	codingSkillsData,
	profSkillsData,
} from "../../data/dataAboutMe";
import MySkills from "./MySkills";

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
						{aboutMeData.map((item, index) => (
							<p key={index} className="mb-3">
								{item}
							</p>
						))}
					</div>
				</div>
				<div className="md:order-1 -order-1">
					<img
						className="min-w-[260px] h-[600px]"
						src="/pictures/aboutMe.png"
						alt="aboutMePhoto"
					/>
				</div>
			</main>
			<div className="my-10 mx-10 text-center">
				<h2 className="text-5xl font-medium my-7">Мои навыки</h2>
				<div className="flex flex-wrap justify-around items-start gap-5">
					<MySkills
						skillsData={codingSkillsData}
						title={"Технические навыки"}
					/>
					<MySkills
						skillsData={profSkillsData}
						title={"Дополнительные навыки"}
					/>
				</div>
			</div>
		</div>
	);
}
