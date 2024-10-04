import { useState } from "react";
import { QuestionFormProps } from "../../../constants/questionTypeComponents";
import Button from "../../Button/Button";
import './DetailedAnswerQuestion.scss';

const DetailedAnswerQuestion = ({
	question,
	onSubmit,
	defaultValue = "",
}: QuestionFormProps) => {
	const [answer, setAnswer] = useState(defaultValue as string);

	return (
		<div className="DetailedAnswerQuestion">
			<h2>{question.questionDescription}</h2>
			<div>
                <div className="label">Введите ваш ответ</div>
				<textarea
					value={answer}
					onChange={(e) => setAnswer(e.target.value)}
					className="detailedAnswerInput"
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

export default DetailedAnswerQuestion;
