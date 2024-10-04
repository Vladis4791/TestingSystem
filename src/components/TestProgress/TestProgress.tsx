import React from "react";
import { ProgressItem } from "./ProgressItem/ProgressItem";

import "./TestProgress.scss";
import { QuestionResolutionState } from "../../pages/Test/Test";

export interface QuestionResolution {
	questionId: string;
	questionState: QuestionResolutionState;
	answer: unknown;
}

const TestProgress = ({
	progress,
	currentQuestionNumber,
	goToQuestionNumber,
}: {
	progress: QuestionResolution[];
	currentQuestionNumber: number;
	goToQuestionNumber: (questionNumber: number) => void;
}) => {

	const onProgressItemClick = (questionNumber: number) => {
		if (
			progress[questionNumber].questionState !== QuestionResolutionState.UNAVAILABLE
		) {
			goToQuestionNumber(questionNumber);
		}
	};

	return (
		<div className="TestProgress">
			{progress.map((questionResolution, idx) => (
				<ProgressItem
					isActive={idx === currentQuestionNumber}
					onClick={() => onProgressItemClick(idx)}
					key={questionResolution.questionId}
					state={questionResolution.questionState}
				/>
			))}
		</div>
	);
};

export default TestProgress;
