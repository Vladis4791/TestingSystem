const data = [
	{
		questionId: "1",
		questionDescription: "Какая столица Франции?",
		questionType: "oneAnswer",
		answerOptions: [
			{
				answerId: "a",
				answerContent: "Париж",
			},
			{
				answerId: "b",
				answerContent: "Марсель",
			},
			{
				answerId: "c",
				answerContent: "Лион",
			},
			{
				answerId: "d",
				answerContent: "Ницца",
			},
		],
		correctAnswerId: "a",
	},
	{
		questionId: "2",
		questionDescription: "Какая самая высокая гора в мире?",
		questionType: "oneAnswer",
		answerOptions: [
			{
				answerId: "a",
				answerContent: "Эверест",
			},
			{
				answerId: "b",
				answerContent: "К2",
			},
			{
				answerId: "c",
				answerContent: "Монблан",
			},
			{
				answerId: "d",
				answerContent: "Килиманджаро",
			},
		],
		correctAnswerId: "a",
	},
	// // {
	// // 	questionId: "3",
	// // 	questionDescription: "Какая самая крупная река в Южной Америке?",
	// // 	questionType: "oneAnswer",
	// // 	answerOptions: [
	// // 		{
	// // 			answerId: "a",
	// // 			answerContent: "Амазонка",
	// // 		},
	// // 		{
	// // 			answerId: "b",
	// // 			answerContent: "Парана",
	// // 		},
	// // 		{
	// // 			answerId: "c",
	// // 			answerContent: "Ориноко",
	// // 		},
	// // 		{
	// // 			answerId: "d",
	// // 			answerContent: "Магдалена",
	// // 		},
	// // 	],
	// // 	correctAnswerId: "a",
	// // },
	// // {
	// // 	questionId: "4",
	// // 	questionDescription: "В каком году была открыта Америка?",
	// // 	questionType: "oneAnswer",
	// // 	answerOptions: [
	// // 		{
	// // 			answerId: "a",
	// // 			answerContent: "1492",
	// // 		},
	// // 		{
	// // 			answerId: "b",
	// // 			answerContent: "1498",
	// // 		},
	// // 		{
	// // 			answerId: "c",
	// // 			answerContent: "1602",
	// // 		},
	// // 		{
	// // 			answerId: "d",
	// // 			answerContent: "1776",
	// // 		},
	// // 	],
	// // 	correctAnswerId: "a",
	// // },
	// // {
	// // 	questionId: "5",
	// // 	questionDescription: "Какой материк является самым большим?",
	// // 	questionType: "oneAnswer",
	// // 	answerOptions: [
	// // 		{
	// // 			answerId: "a",
	// // 			answerContent: "Африка",
	// // 		},
	// // 		{
	// // 			answerId: "b",
	// // 			answerContent: "Южная Америка",
	// // 		},
	// // 		{
	// // 			answerId: "c",
	// // 			answerContent: "Евразия",
	// // 		},
	// // 		{
	// // 			answerId: "d",
	// // 			answerContent: "Австралия",
	// // 		},
	// // 	],
	// // 	correctAnswerId: "c",
	// // },
	// // {
	// // 	questionId: "6",
	// // 	questionDescription: "Какая самая большая пустыня в мире?",
	// // 	questionType: "oneAnswer",
	// // 	answerOptions: [
	// // 		{
	// // 			answerId: "a",
	// // 			answerContent: "Сахара",
	// // 		},
	// // 		{
	// // 			answerId: "b",
	// // 			answerContent: "Гоби",
	// // 		},
	// // 		{
	// // 			answerId: "c",
	// // 			answerContent: "Калахари",
	// // 		},
	// // 		{
	// // 			answerId: "d",
	// // 			answerContent: "Арабская",
	// // 		},
	// // 	],
	// // 	correctAnswerId: "a",
	// // },
	// // {
	// // 	questionId: "7",
	// // 	questionDescription:
	// // 		"Какой химический элемент является самым распространенным во Вселенной?",
	// // 	questionType: "oneAnswer",
	// // 	answerOptions: [
	// // 		{
	// // 			answerId: "a",
	// // 			answerContent: "Кислород",
	// // 		},
	// // 		{
	// // 			answerId: "b",
	// // 			answerContent: "Водород",
	// // 		},
	// // 		{
	// // 			answerId: "c",
	// // 			answerContent: "Гелий",
	// // 		},
	// // 		{
	// // 			answerId: "d",
	// // 			answerContent: "Железо",
	// // 		},
	// // 	],
	// // 	correctAnswerId: "b",
	// // },
	{
		questionId: "26",
		questionDescription: "Назовите столицу Японии.",
		questionType: "shortAnswer",
	},
	{
		questionId: "27",
		questionDescription: "Сколько континентов на Земле?",
		questionType: "shortAnswer",
	},
	// {
	// 	questionId: "28",
	// 	questionDescription:
	// 		"Какой химический элемент обозначается символом 'O'?",
	// 	questionType: "shortAnswer",
	// },
	// // {
	// // 	questionId: "29",
	// // 	questionDescription: "Какой является крупнейшим океаном на Земле?",
	// // 	questionType: "shortAnswer",
	// // },
	// // {
	// // 	questionId: "30",
	// // 	questionDescription: "Назовите автора романа '1984'.",
	// // 	questionType: "shortAnswer",
	// // },

	{
		questionId: "21",
        questionType: "manyAnswers",
		questionDescription:
			"Какие планеты в Солнечной системе относятся к газовым гигантам?",
		answerOptions: [
			{
				answerId: "a",
				answerContent: "Юпитер",
			},
			{
				answerId: "b",
				answerContent: "Сатурн",
			},
			{
				answerId: "c",
				answerContent: "Уран",
			},
			{
				answerId: "d",
				answerContent: "Нептун",
			},
			{
				answerId: "e",
				answerContent: "Марс",
			},
		],
		correctAnswersIds: ["a", "b", "c", "d"],
	},
	{
		questionId: "22",
		questionDescription: "Какие континенты находятся в Южном полушарии?",
        questionType: "manyAnswers",
		answerOptions: [
			{
				answerId: "a",
				answerContent: "Южная Америка",
			},
			{
				answerId: "b",
				answerContent: "Африка",
			},
			{
				answerId: "c",
				answerContent: "Австралия",
			},
			{
				answerId: "d",
				answerContent: "Антарктида",
			},
			{
				answerId: "e",
				answerContent: "Евразия",
			},
		],
		correctAnswersIds: ["a", "b", "c", "d"],
	},
	// // {
	// // 	questionId: "23",
	// // 	questionDescription: "Какие из этих океанов омывают Австралию?",
    // //     questionType: "manyAnswers",
	// // 	answerOptions: [
	// // 		{
	// // 			answerId: "a",
	// // 			answerContent: "Тихий океан",
	// // 		},
	// // 		{
	// // 			answerId: "b",
	// // 			answerContent: "Индийский океан",
	// // 		},
	// // 		{
	// // 			answerId: "c",
	// // 			answerContent: "Атлантический океан",
	// // 		},
	// // 		{
	// // 			answerId: "d",
	// // 			answerContent: "Северный Ледовитый океан",
	// // 		},
	// // 		{
	// // 			answerId: "e",
	// // 			answerContent: "Южный океан",
	// // 		},
	// // 	],
	// // 	correctAnswersIds: ["a", "b", "e"],
	// // },
	// // {
	// // 	questionId: "24",
    // //     questionType: "manyAnswers",
	// // 	questionDescription:
	// // 		"Какие из этих стран являются членами Европейского союза?",
	// // 	answerOptions: [
	// // 		{
	// // 			answerId: "a",
	// // 			answerContent: "Германия",
	// // 		},
	// // 		{
	// // 			answerId: "b",
	// // 			answerContent: "Россия",
	// // 		},
	// // 		{
	// // 			answerId: "c",
	// // 			answerContent: "Франция",
	// // 		},
	// // 		{
	// // 			answerId: "d",
	// // 			answerContent: "Великобритания",
	// // 		},
	// // 		{
	// // 			answerId: "e",
	// // 			answerContent: "Украина",
	// // 		},
	// // 	],
	// // 	correctAnswersIds: ["a", "c", "d"],
	// // },
	// // {
	// // 	questionId: "25",
    // //     questionType: "manyAnswers",
	// // 	questionDescription: "Какие из этих животных являются млекопитающими?",
	// // 	answerOptions: [
	// // 		{
	// // 			answerId: "a",
	// // 			answerContent: "Кит",
	// // 		},
	// // 		{
	// // 			answerId: "b",
	// // 			answerContent: "Орел",
	// // 		},
	// // 		{
	// // 			answerId: "c",
	// // 			answerContent: "Акула",
	// // 		},
	// // 		{
	// // 			answerId: "d",
	// // 			answerContent: "Слон",
	// // 		},
	// // 		{
	// // 			answerId: "e",
	// // 			answerContent: "Черепаха",
	// // 		},
	// // 	],
	// // 	correctAnswersIds: ["a", "d"],
	// // },
	// // {
	// // 	questionId: "31",
	// // 	questionDescription:
	// // 		"Объясните, как изменение климата влияет на экосистемы и биоразнообразие.",
	// // 	questionType: "detailedAnswer",
	// // },
	// // {
	// // 	questionId: "32",
	// // 	questionDescription:
	// // 		"Проанализируйте ключевые факторы, способствующие экономическому развитию стран третьего мира.",
	// // 	questionType: "detailedAnswer",
	// // },
	// // {
	// // 	questionId: "33",
	// // 	questionDescription:
	// // 		"Какие последствия могут возникнуть в результате внедрения искусственного интеллекта в повседневную жизнь?",
	// // 	questionType: "detailedAnswer",
	// // },
	{
		questionId: "34",
		questionDescription:
			"Опишите, как культурные различия могут влиять на международное сотрудничество.",
		questionType: "detailedAnswer",
	},
	{
		questionId: "35",
		questionDescription:
			"Как вы считаете, какую роль играет образование в борьбе с неравенством и бедностью в современном обществе?",
		questionType: "detailedAnswer",
	},
];

export default data;
