import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {Button, Card, CardGrid, Div, Panel, PanelHeader, PanelHeaderBack, Title} from '@vkontakte/vkui';
import './Persik.css';

const Game = ({id, go, currentPlayer, setCurrentPlayer, players, endGame, playersCount, location}) => {
	const [stage, setStage] = useState('turn') // turn при переходе хода, play - ход игрока

	const startPlaying = () => {
	  setStage('play')
	}

	const endPlaying = () => {
		if ( currentPlayer + 1 < playersCount) {
			setStage('turn')
			setCurrentPlayer(currentPlayer + 1)

		} else {
			endGame()
		}
	}

	return (
		<Panel id={id}>
			<PanelHeader
				left={<PanelHeaderBack onClick={go} data-to="home"/>}
			>
				{stage === 'turn' ? `Переход хода к игроку ${currentPlayer + 1}` : `Ход игрока ${currentPlayer + 1}`}
			</PanelHeader>
			<CardGrid size="l">
				<Card mode="shadow">
					{stage === 'turn' ? `Переход хода к игроку ${currentPlayer + 1}` : `Ход игрока ${currentPlayer + 1}`}
					<div style={{ height: 100 }} />
					{stage === 'play' && players.find( (e) => e.id === currentPlayer).isSpy && <Title>Ты шпион</Title>}
					{stage === 'play' && !players.find( (e) => e.id === currentPlayer).isSpy && <Title>{location}</Title>}
					<div style={{ height: 100 }} />
					<Div>
						{stage === 'turn' ? <Button size="l" stretched
								onClick={startPlaying} data-to="game">Начать игру</Button>:
							<Button size="l" stretched
									onClick={endPlaying} data-to="game">Передать ход</Button>}
					</Div>
				</Card>
			</CardGrid>
		</Panel>
	)
};

Game.propTypes = {
	id: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	playersCount: PropTypes.number.isRequired,
	go: PropTypes.func.isRequired,
	players: PropTypes.array.isRequired,
	setCurrentPlayer: PropTypes.func.isRequired,
	endGame: PropTypes.func.isRequired,
	currentPlayer: PropTypes.number.isRequired,
};

export default Game;
