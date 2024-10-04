import { useState } from "react";
import { OneAnswerQuestionProps } from "../../../interfaces/questionWithAnswers.interface";
import RadioButton from "../../radiobutton/RadioButton";
import Button from "../../Button/Button";
import { QuestionFormProps } from "../../../constants/questionTypeComponents";

const OneAnswerQuestion = ({
	question,
    onSubmit,
    defaultValue = ""
}: QuestionFormProps) => {
	const [selectedAnswerId, setSelectedAnswerId] = useState(defaultValue as string);
	const { answerOptions, questionDescription } =
		question as OneAnswerQuestionProps;

    const isSelected = answerOptions.map(answerOption => answerOption.answerId).includes(selectedAnswerId);

	return (
		<div className="OneAnswerQuestion">
			<h2>{questionDescription}</h2>
			<div className="answerOptions">
				{answerOptions.map((answerOption) => (
					<RadioButton
                        key={answerOption.answerId}
						groupName="answers"
						checked={selectedAnswerId === answerOption.answerId}
						onChange={() =>
							setSelectedAnswerId(answerOption.answerId)
						}
						radioButtonName={answerOption.answerContent}
					/>
				))}
			</div>
			<Button title="Отправить" onClick={() => onSubmit(selectedAnswerId)} disabled={!isSelected} />
		</div>
	);
};

export default OneAnswerQuestion;
