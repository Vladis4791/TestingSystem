import { useState } from "react";
import { QuestionFormProps } from "../../../constants/questionTypeComponents";
import Button from "../../Button/Button";
import './ShortAnswerQuestion.scss';

const ShortAnswerQuestion = ({
	question,
	onSubmit,
	defaultValue = "",
}: QuestionFormProps) => {
	const [answer, setAnswer] = useState(defaultValue as string);

	return (
		<div className="ShortAnswerQuestion">
			<h2>{question.questionDescription}</h2>
			<div>
				<div className="label">Введите ваш ответ в поле ниже:</div>
				<input
					value={answer}
					onChange={(e) => setAnswer(e.target.value)}
					className="shortAnswerInput"
				/>
			</div>
			<Button
				title="Отправить"
				onClick={() => onSubmit(answer)}
				disabled={answer === ""}
			/>
		</div>
	);
};

export default ShortAnswerQuestion;
