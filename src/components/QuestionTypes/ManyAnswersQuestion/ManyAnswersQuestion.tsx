import { useState } from "react";
import { QuestionFormProps } from "../../../constants/questionTypeComponents";
import { ManyAnswersQuestionProps } from "../../../interfaces/questionWithAnswers.interface";
import Button from "../../Button/Button";
import Checkbox from "../../Checkbox/Checkbox";
import './ManyAnswersQuestion.scss';

const ManyAnswersQuestion = ({
	question,
	onSubmit,
	defaultValue = [],
}: QuestionFormProps) => {
	const [selectedAnswerIds, setSelectedAnswerIds] = useState(defaultValue as string[]);
	const { answerOptions, questionDescription } = question as ManyAnswersQuestionProps;

	// const isSelected = answerOptions.map(answerOption => answerOption.answerId).includes(selectedAnswerId);

	const onChecked = (checked: boolean, checkedAnswerId: string) => {
		if (checked) {
			setSelectedAnswerIds((prev) => [...prev, checkedAnswerId]);
		} else {
            setSelectedAnswerIds(prev => prev.filter(answerId => answerId !== checkedAnswerId))
        }
	};

	return (
		<div className="ManyAnswersQuestion">
			<h2>{questionDescription}</h2>
			<div className="answerOptions">
				{answerOptions.map((answerOption) => (
					<div className="checkboxField" key={answerOption.answerId}>
						<Checkbox
							onChange={(checked) =>
								onChecked(checked, answerOption.answerId)
							}
							checked={selectedAnswerIds.includes(answerOption.answerId)}
						/>
						<div className="checkboxLabel">{answerOption.answerContent}</div>
					</div>
				))}
			</div>
			<Button
				title="Отправить"
				onClick={() => onSubmit(selectedAnswerIds)}
				disabled={selectedAnswerIds.length === 0}
			/>
		</div>
	);
};

export default ManyAnswersQuestion;
