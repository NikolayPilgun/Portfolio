import { motion } from "framer-motion";
import { ISkills } from "../../data/dataAboutMe";
import Counter from "../counter/Counter";

export default function MySkills({
	skillsData,
	title,
}: {
	skillsData: ISkills[];
	title: string;
}) {
	return (
		<section className="sm:w-[400px] w-full">
			<h3 className="text-2xl my-7">{title}</h3>
			<div className="w-full h-auto border-4 border-solid rounded-md border-sky-900">
				{skillsData.map((item) => (
					<div key={`${item.name}${item.level}`} className="w-full px-4 py-5">
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
	);
}
