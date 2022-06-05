import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import {
	Panel,
	PanelHeader,
	Header,
	Button,
	Group,
	Cell,
	Div,
	Avatar,
	FormItem,
	Input,
	Title,
	CellButton, Card, Spacing
} from '@vkontakte/vkui';

const Home = ({ id, startGame }) => {
	const [playersCount, setPlayersCount] = useState('')
	const [isDisabled, setIsDisabled] = useState(true)
	const [selectedLocation, setSelectedLocation] = useState('Кафе')

	useEffect( () => {
		if (parseInt(playersCount) > 0 && parseInt(playersCount) <= 12) {
			setIsDisabled(false)
		} else {
			setIsDisabled(true)
		}
	}, [playersCount])

	return(
		<Panel id={id} centered>
			<PanelHeader>Начало игры!</PanelHeader>
			<Group>
				<Card mode="shadow">
				<FormItem top="Введите количество игроков">
					<Input
						onChange={(e) => setPlayersCount(e.target.value)}
						type="text" defaultValue="" value={playersCount.toString()}/>
				</FormItem>
				</Card>
				<div style={{ height: 24 }} />
				<Card mode="shadow">
			<FormItem top="Выберите локацию">
				<Spacing separator size={8} />
				{selectedLocation === 'Кафе' ?
				<Cell expandable>
					<Title>Кафе</Title>
				</Cell> : <CellButton onClick={() => setSelectedLocation('Кафе')}>Кафе</CellButton>}
				{selectedLocation === 'Кладбище' ?
				<Cell expandable>
					<Title>Кладбище</Title>
				</Cell>: <CellButton onClick={() => setSelectedLocation('Кладбище')}>Кладбище</CellButton>}
				{selectedLocation === 'Порт' ?
				<Cell expandable>
					<Title>Порт</Title>
				</Cell>: <CellButton onClick={() => setSelectedLocation('Порт')}>Порт</CellButton>}
				{selectedLocation === 'Тюрьма' ?
				<Cell expandable>
					<Title>Тюрьма</Title>
				</Cell>:<CellButton onClick={() => setSelectedLocation('Тюрьма')}>Тюрьма</CellButton>}

			</FormItem>
				</Card>
			</Group>

			<Div>
				<Button disabled={isDisabled} size="l" stretched
						onClick={() => startGame(playersCount, selectedLocation)}>Начать игру</Button>
			</Div>
		</Panel>
	)
}
;

Home.propTypes = {
	id: PropTypes.string.isRequired,
	startGame: PropTypes.func.isRequired,
};

export default Home;
