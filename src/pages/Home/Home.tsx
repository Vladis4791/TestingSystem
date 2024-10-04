import React, { useEffect } from 'react'
import './Home.scss';
import { NavLink } from 'react-router-dom';
import { previousUserProgressKeyInStorage } from '../../constants/store';
import NavButton from '../../components/NavButton/NavButton';

const Home = () => {

    useEffect(() => {
        localStorage.removeItem(previousUserProgressKeyInStorage);
    }, []);

  return (
    <div className="Home">
			<div className="wrapper">
				<div className="content">
					<h1>Добро пожаловать!</h1>
					<p>Вы можете перейти к решению теста, нажав на кнопку ниже</p>
					<NavButton to="/test">Перейти к тесту</NavButton>
				</div>
			</div>
		</div>
  )
}

export default Home