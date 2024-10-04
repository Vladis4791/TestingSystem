import React, { useEffect, useRef, useState } from "react";
import "./Timer.scss";

const Timer = ({
	countSeconds,
	onFinished,
}: {
	countSeconds: number;
	onFinished: () => void;
}) => {
	const [secondsLeft, setSecondsLeft] = useState(countSeconds);
	const [a, setA] = useState(false);
	const timerIntervalId = useRef(0);

	useEffect(() => {
		timerIntervalId.current = setInterval(() => {
			setSecondsLeft((prev) => prev - 1);
		}, 1000);

		return () => {
			clearInterval(timerIntervalId.current);
		};
	}, [a]);

	useEffect(() => {
		if (secondsLeft === 0) {
			clearInterval(timerIntervalId.current);
			onFinished();
		}
	}, [secondsLeft, onFinished]);

	const makeTimeForm = () => {
		const minutes = Math.floor(secondsLeft / 60);
		const seconds = secondsLeft % 60;

		const leadingZeroForMinutes = minutes < 10 ? "0" : "";
		const leadingZeroForSeconds = seconds < 10 ? "0" : "";

		return `${leadingZeroForMinutes}${minutes}:${leadingZeroForSeconds}${seconds}`;
	};

	const littleTimeClassName = secondsLeft < countSeconds * 0.2 ? "littleTime" : "";

	return <div className={`Timer ${littleTimeClassName}`}>{makeTimeForm()}</div>;
};

export default Timer;
