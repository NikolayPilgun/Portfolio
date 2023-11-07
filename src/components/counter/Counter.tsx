import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Counter({ value }: { value: number }) {
	const ref = useRef<HTMLSpanElement>(null);
	const motionValue = useMotionValue(0);
	const springValue = useSpring(motionValue, {
		damping: 400,
		stiffness: 200,
	});
	const isInView = useInView(ref, {
		amount: 0.2,
		once: true,
		margin: "-50px",
	});

	useEffect(() => {
		if (isInView) {
			motionValue.set(value);
		}
	}, [motionValue, isInView, value]);

	useEffect(
		() =>
			springValue.on("change", (latest) => {
				if (ref.current) {
					ref.current.textContent = Intl.NumberFormat("en-US").format(
						latest.toFixed(0)
					);
				}
			}),
		[springValue]
	);

	return <span ref={ref} />;
}
