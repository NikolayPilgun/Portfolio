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
		<article className="sm:w-96 w-full bg-gray-100 p-4 rounded-lg shadow-md">
			<h3 className="sm:text-2xl text-xl my-4 text-center">{title}</h3>

			<div className="w-full">
				{skillsData.map((item) => (
					<div key={`${item.name}${item.level}`} className="mb-4">
						<h4 className="flex justify-between items-center">
							{item.name}
							<span className="text-sm">
								<Counter value={item.level} />%
							</span>
						</h4>
						<div className="w-full h-3 bg-gray-300 rounded-md overflow-hidden mt-2">
							<motion.div
								className="h-2 bg-amber-400"
								initial={{ width: 0 }}
								whileInView={{ width: `${item.level}%` }}
								viewport={{ amount: 0.2, once: true }}
								transition={{ duration: 1.3, delay: 0.5 }}
							></motion.div>
						</div>
					</div>
				))}
			</div>
		</article>
	);
}
