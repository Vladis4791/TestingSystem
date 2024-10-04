import React, { useEffect, useRef, useState } from "react";
import { Question, QuestionTypes } from "../../interfaces/question.interface";
import questionAPI from "../../APIs/question.api";

import "./Test.scss";
import questionTypeComponents from "../../constants/questionTypeComponents";
import { useNavigate } from "react-router-dom";
import TestProgress, {
	QuestionResolution,
} from "../../components/TestProgress/TestProgress";
import Timer from "../../components/Timer/Timer";
import { previousUserProgressKeyInStorage } from "../../constants/store";
import Loader from "../../components/Loader/Loader";

export enum QuestionResolutionState {
	SOLVED,
	HEAD,
	UNAVAILABLE,
}

const Test = () => {
	const [questions, setQuestions] = useState<Question[]>([]);
	const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
	const [isLoading, setIsLoading] = useState(true);
	const [userProgressOnTest, setUserProgressOnTest] = useState<QuestionResolution[]>(
		[]
	);

	const navigate = useNavigate();

	useEffect(() => {
		questionAPI.getQuestions().then((res) => {
			setIsLoading(false);
			const result = res as Question[];
			setQuestions(result);

			let userProgress: QuestionResolution[];
			const previousUserProgress = localStorage.getItem(
				previousUserProgressKeyInStorage
			);

			if (!previousUserProgress) {
				userProgress = result.map((question) => {
					const usersCurrentQuestionResolution: QuestionResolution = {
						questionId: question.questionId,
						questionState: QuestionResolutionState.UNAVAILABLE,
						answer: undefined,
					};

					return usersCurrentQuestionResolution;
				});

				userProgress[0].questionState = QuestionResolutionState.HEAD;

				localStorage.setItem(
					previousUserProgressKeyInStorage,
					JSON.stringify(userProgress)
				);
			} else {
				userProgress = JSON.parse(previousUserProgress);
			}

			setUserProgressOnTest(userProgress);

			const headQuestionNumber = userProgress.findIndex(
				(question) => question.questionState === QuestionResolutionState.HEAD
			);
			setCurrentQuestionNumber(headQuestionNumber === -1 ? 0 : headQuestionNumber);
		});
	}, []);

	useEffect(() => {
		if (!isLoading) {
			localStorage.setItem(
				previousUserProgressKeyInStorage,
				JSON.stringify(userProgressOnTest)
			);
		}
	}, [userProgressOnTest, isLoading]);

	useEffect(() => {
		if (currentQuestionNumber === questions.length && questions.length !== 0) {
			navigate("/results");
		}
	}, [currentQuestionNumber]);

	const onTimersUp = () => {
		localStorage.removeItem(previousUserProgressKeyInStorage);
		navigate("/timesUp");
	};

	const getCopyOfQuestionResolution = (
		questionResolution: QuestionResolution
	): QuestionResolution => {
		return {
			...questionResolution,
		} as QuestionResolution;
	};

	const getNextQuestionResolutionHeaded = () => {
		const nextQuestionResolutionCopy = getCopyOfQuestionResolution(
			userProgressOnTest[currentQuestionNumber + 1]
		);

		nextQuestionResolutionCopy.questionState = QuestionResolutionState.HEAD;

		return nextQuestionResolutionCopy;
	};

	const getCurrentQuestionResolutionSolvedWithUserAnswer = (userAnswer: unknown) => {
		const currentQuestionResolutionCopy = getCopyOfQuestionResolution(
			userProgressOnTest[currentQuestionNumber]
		);

		currentQuestionResolutionCopy.answer = userAnswer;
		currentQuestionResolutionCopy.questionState = QuestionResolutionState.SOLVED;

		return currentQuestionResolutionCopy;
	};

	const onSubmitQuestion = (userAnswer: unknown) => {
		const currentQuestionResolution = userProgressOnTest[currentQuestionNumber];
		const newUserProgressOnTest = [...userProgressOnTest];

		if (
			currentQuestionResolution.questionState === QuestionResolutionState.HEAD &&
			currentQuestionNumber + 1 !== questions.length
		) {
			const nextQuestionResolution = getNextQuestionResolutionHeaded();
			newUserProgressOnTest[currentQuestionNumber + 1] = nextQuestionResolution;
		}

		const solvedQuestionResolution =
			getCurrentQuestionResolutionSolvedWithUserAnswer(userAnswer);

		newUserProgressOnTest[currentQuestionNumber] = solvedQuestionResolution;

		setUserProgressOnTest(newUserProgressOnTest);
		setCurrentQuestionNumber((prev) => prev + 1);
	};

	const renderQuestion = () => {
		if (
			currentQuestionNumber === userProgressOnTest.length ||
			userProgressOnTest.length === 0
		)
			return null;

		const currentQuestion = questions[currentQuestionNumber];
		const defaultValue = userProgressOnTest[currentQuestionNumber].answer;

		const QuestionTemplate = questionTypeComponents.get(
			currentQuestion.questionType as QuestionTypes
		);

		if (!QuestionTemplate) return null;

		return (
			<QuestionTemplate
				key={currentQuestion.questionId}
				question={currentQuestion}
				onSubmit={onSubmitQuestion}
				defaultValue={defaultValue}
			/>
		);
	};

	return (
		<div className="Test">
			<div className="content">
				<div className="container">
					<div className="testHeader">
						<h1>Тестирование</h1>
						<Timer countSeconds={30 * 60} onFinished={onTimersUp} />
					</div>
					<div className="questionContent">
						{isLoading ? (
							<Loader />
						) : (
							<div className="questionData">
								<TestProgress
									currentQuestionNumber={currentQuestionNumber}
									progress={userProgressOnTest}
									goToQuestionNumber={(questionNumber) =>
										setCurrentQuestionNumber(questionNumber)
									}
								/>
								<div className="currentQuestion">{renderQuestion()}</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Test;
