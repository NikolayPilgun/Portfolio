import { FC } from "react";
import {
	aboutMeData,
	codingSkillsData,
	profSkillsData,
} from "../../data/dataAboutMe";
import MySkills from "./MySkills";

const AboutMe: FC = () => {
	return (
		<main className="flex-grow mt-10 mb-32">
			<section className="flex flex-col md:flex-row justify-center items-center gap-5 mx-5">
				<section className="max-w-6xl">
					<h2 className="md:text-5xl text-3xl mb-3">Обо мне</h2>
					{aboutMeData.map((item, index) => (
						<p
							key={index}
							className={`mb-3  ${index === 0 ? "text-xl mb-4" : "text-base"}`}
						>
							{item}
						</p>
					))}
				</section>
				<figure>
					<img
						className="min-w-[260px] h-[600px]"
						src="/pictures/aboutMe.png"
						alt="Фотография обо мне"
					/>
				</figure>
			</section>
			<section className="my-10 mx-10 text-center">
				<h3 className="text-5xl font-medium my-7">Мои навыки</h3>
				<div className="flex flex-wrap justify-around items-start gap-5">
					<MySkills skillsData={codingSkillsData} title="Технические навыки" />
					<MySkills skillsData={profSkillsData} title="Дополнительные навыки" />
				</div>
			</section>
		</main>
	);
};

export default AboutMe;
