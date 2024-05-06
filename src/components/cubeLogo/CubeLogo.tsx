import { FC } from "react";
import styles from "./cubeLogo.module.css";
const CubeLogo: FC = () => {
	return (
		<div className={`${styles.container} max-md:scale-75 max-md:-top-3`}>
			<div className={styles.box}>
				<div className={styles.card}>JavaScript</div>
				<div className={styles.card}>Next.js</div>
				<div className={styles.card}>HTML</div>
				<div className={styles.card}>CSS</div>
				<div className={styles.card}>React</div>
				<div className={styles.card}>TypeScript</div>
				<div className={styles.logo}>
					<span>Web</span>
					<span>Developer</span>
				</div>
			</div>
		</div>
	);
};

export default CubeLogo;
