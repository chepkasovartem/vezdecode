import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import {Cell, Group, Panel, PanelHeader, PanelHeaderBack, Title} from '@vkontakte/vkui';
import './Persik.css';

const Persik = props => {
	const [timer, setTimer] = useState(0)
	useEffect(() =>{setTimeout(() => {
		setTimer(1)
	}, 3000)},[])

		return (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
			Persik1
		</PanelHeader>
		<Group>
			<Cell
				expandable
				onClick={props.go} data-to="playerScreen"
			>
				<Title>Шоколадная фабрика</Title>
			</Cell>
			<Cell
				expandable
				onClick={props.go} data-to="turnScreen"
			>
				<Title>Кладбище</Title>
			</Cell>
			<Cell
				expandable
				onClick={props.go} data-to="setPlayersCount"
			>
				<Title>Порт</Title>
			</Cell>
			<Cell
				expandable
				onClick={props.go} data-to="home"
			>
				<Title>Тюрьма</Title>
			</Cell>
			<Cell
				expandable
				onClick={props.go} data-to="home"
			>
				<Title>Выставка кошек</Title>
			</Cell>
			<Cell
				expandable
				onClick={props.go} data-to="home"
			>
				<Title>{timer}</Title>
			</Cell>
		</Group>
		{/*<img className="Persik" src={persik} alt="Persik The Cat"/>*/}
	</Panel>
		)
};

Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik;
