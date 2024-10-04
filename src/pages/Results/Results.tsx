import React, { useEffect } from "react";
import NavButton from "../../components/NavButton/NavButton";
import "./Results.scss";
import { previousUserProgressKeyInStorage } from "../../constants/store";

const Results = () => {
	useEffect(() => {
		console.log(
			"Статистика по вопросам с ответами пользователя",
			JSON.parse(localStorage.getItem(previousUserProgressKeyInStorage) ?? "[]")
		);

        localStorage.removeItem(previousUserProgressKeyInStorage);
	}, []);

	return (
		<div className="Results">
			<div className="wrapper">
				<div className="content">
					<h1>Вы выполнили тестирование!</h1>
					<p>
						Объект с полученными ответами можно посмотреть в консоли (ctrl +
						shift + i)
					</p>
					<p>Вы можете пройти его еще раз, нажав на кнопку ниже</p>
					<NavButton to="/test">Перейти к тесту</NavButton>
				</div>
			</div>
		</div>
	);
};

export default Results;
