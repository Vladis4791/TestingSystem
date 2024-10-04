import { AnswerOption } from "./answerOption.interface";
import { Question } from "./question.interface";

interface QuestionWithAnswers extends Question {
    answerOptions: AnswerOption[];
}

export interface OneAnswerQuestionProps extends QuestionWithAnswers {
    correctAnswerId: string;
}

export interface ManyAnswersQuestionProps extends QuestionWithAnswers {
    correctAnswerIds: string[];
}