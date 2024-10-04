import React from "react";
import { QuestionResolutionState } from "../../../pages/Test/Test";
import "./ProgressItem.scss";

export const ProgressItem = ({
	isActive = false,
	onClick,
	state,
}: {
	onClick: () => void;
	isActive?: boolean;
	state: QuestionResolutionState;
}) => {
	const classNameDependingOnState =
		state === QuestionResolutionState.SOLVED
			? "solved"
			: state === QuestionResolutionState.HEAD
			? "head"
			: "unavailable";

	return (
		<button
			onClick={onClick}
			className={`ProgressItem ${
				isActive ? "active" : ""
			} ${classNameDependingOnState}`}
		></button>
	);
};
