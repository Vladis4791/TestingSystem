import DetailedAnswerQuestion from "../components/QuestionTypes/DetailedAnswerQuestion/DetailedAnswerQuestion";
import ManyAnswersQuestion from "../components/QuestionTypes/ManyAnswersQuestion/ManyAnswersQuestion";
import OneAnswerQuestion from "../components/QuestionTypes/OneAnswerQuestion/OneAnswerQuestion";
import ShortAnswerQuestion from "../components/QuestionTypes/ShortAnswerQuestion/ShortAnswerQuestion";
import { Question, QuestionTypes } from "../interfaces/question.interface";

export interface QuestionFormProps {
    question: Question,
    onSubmit: (answer: unknown) => void;
    defaultValue: unknown;
}

const questionTypeComponents = new Map<
	QuestionTypes,
	(props: QuestionFormProps) => JSX.Element
>();

questionTypeComponents.set(QuestionTypes.CHOICE_ONE_ANSWER, OneAnswerQuestion);
questionTypeComponents.set(QuestionTypes.CHOICE_MANY_ANSWERS, ManyAnswersQuestion);
questionTypeComponents.set(QuestionTypes.SHORT_ANSWER, ShortAnswerQuestion);
questionTypeComponents.set(QuestionTypes.DETAILED_ANSWER, DetailedAnswerQuestion);

export default questionTypeComponents;
