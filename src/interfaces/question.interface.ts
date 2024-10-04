export enum QuestionTypes {
    CHOICE_ONE_ANSWER = "oneAnswer",
    CHOICE_MANY_ANSWERS = "manyAnswers",
    SHORT_ANSWER ="shortAnswer",
    DETAILED_ANSWER ="detailedAnswer",
}

export interface Question {
    questionId: string;
    questionType: QuestionTypes;
    questionDescription: string;
}