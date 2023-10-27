import { useEffect, useState } from "react";
import {
	default as leftArrow,
	default as rightArrow,
} from "../../data/portfolio/icons/arrow4.png";
import styles from "./slider.module.css";

export default function SliderCarousel({
	dataSlider,
}: {
	dataSlider: string[];
}) {
	const items = [
		dataSlider[dataSlider.length - 1],
		...dataSlider,
		dataSlider[0],
	];
	const [slide, setSlide] = useState(1);
	const [isAnimation, setIsAnimation] = useState(300);

	useEffect(() => {
		if (isAnimation === 0) {
			setTimeout(() => {
				setIsAnimation(300);
			}, 100);
		}
	}, [isAnimation]);

	const changeLeftArrow = () => {
		let slideNumber = 0;
		if (slide === 1) {
			slideNumber = slide - 1;
			setTimeout(() => {
				setIsAnimation(0);
				setSlide(items.length - 2);
			}, 300);
		} else {
			slideNumber = slide - 1;
		}

		setSlide(slideNumber);
	};
	const changeRightArrow = () => {
		let slideNumber = 0;

		if (slide === items.length - 2) {
			slideNumber = slide + 1;
			setTimeout(() => {
				setIsAnimation(0);
				setSlide(1);
			}, 300);
		} else {
			slideNumber = slide + 1;
		}

		setSlide(slideNumber);
	};

	return (
		<div className={styles.container}>
			<div className={styles.carousel}>
				<div
					className={styles.itemsList}
					style={{
						transform: `translateX(-${slide * 100}%)`,
						transition: `all ${isAnimation}ms ease-in-out`,
					}}
				>
					{items.map((item, index) => (
						<div key={index} className={styles.item}>
							<img src={item} alt={`Pictures${index}`} />
						</div>
					))}
				</div>
			</div>
			<div className={styles.leftArrow} onClick={changeLeftArrow}>
				<img src={leftArrow} alt="leftArrow" />
			</div>
			<div className={styles.rightArrow} onClick={changeRightArrow}>
				<img src={rightArrow} alt="rightArrow" />
			</div>
		</div>
	);
}
