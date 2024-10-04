import React from "react";
import { NavLink } from "react-router-dom";
import { previousUserProgressKeyInStorage } from "../../constants/store";
import "./TimesUpPage.scss";
import NavButton from "../../components/NavButton/NavButton";

const TimesUpPage = () => {

	return (
		<div className="TimesUpPage">
			<div className="wrapper">
				<div className="content">
					<h1>Время теста закончилось!</h1>
					<p>Вы можете пройти его еще раз, перейдя по ссылке ниже</p>
					<NavButton to="/test">
						Перейти к тесту
					</NavButton>
				</div>
			</div>
		</div>
	);
};

export default TimesUpPage;
