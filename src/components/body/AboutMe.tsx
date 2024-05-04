import {
	aboutMeData,
	codingSkillsData,
	profSkillsData,
} from "../../data/dataAboutMe";
import MySkills from "./MySkills";

export default function AboutMe() {
	return (
		<main className="flex-grow mt-10 mb-32">
			<section className="flex md:flex-row flex-col justify-center items-center gap-5 mx-5">
				<article className="max-w-6xl">
					<h2 className="md:text-5xl text-3xl mb-3">Обо мне</h2>
					<h3 className="md:text-xl text-lg mb-4">
						Мой практический опыт в разработке составляет более двух лет, а
						также я обладаю более чем 10-летним многогранным опытом в различных
						сферах деятельности.
					</h3>
					{aboutMeData.map((item, index) => (
						<p key={index} className="mb-3 text-base">
							{item}
						</p>
					))}
				</article>
				<aside>
					<img
						className="min-w-[260px] h-[600px]"
						src="/pictures/aboutMe.png"
						alt="aboutMePhoto"
					/>
				</aside>
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
}
