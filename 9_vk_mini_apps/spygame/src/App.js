import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import {
	View,
	AdaptivityProvider,
	AppRoot,
	ConfigProvider,
	Title
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Game from "./panels/Game";
import PlayerScreen from "./panels/PlayerScreen";

const App = () => {
	const [scheme, setScheme] = useState('bright_light')
	const [activePanel, setActivePanel] = useState('home');
	// const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	const [playersCount, setPlayersCount] = useState(0);
	const [players, setPlayers] = useState([]);
	const [location, setLocation] = useState('Кафе');
	const [currentPlayer, setCurrentPlayer] = useState(0);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				setScheme(data.scheme)
			}
		});
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	const getSpies = (playersCount) => {
		let spies = []
	  if (playersCount <= 6) {
		  spies = [...spies, parseInt((Math.random()*playersCount).toString()) + 1]
	  } else if (playersCount >= 7 && playersCount <= 12) {
		  spies = [...spies, parseInt((Math.random()*playersCount).toString()) + 1]
		  spies = [...spies, parseInt((Math.random()*playersCount).toString()) + 1]
	  }
	  return spies
	}

	const startGame = (playersCount, location) => {
		setPlayersCount(playersCount)
		setLocation(location)
		const spies = getSpies(playersCount)
		let players = []
		for (let i = 0; i <= playersCount; i++) {
			players = [...players, {id: i, isSpy: spies.find((element) => element === i + 1)}]
		}
		setPlayers(players)
		setActivePanel('game')
		setTimeout(endGame, playersCount * 1000 * 60 )
	}

	const endGame = () => {
		setActivePanel('results')
		setCurrentPlayer(0)
		bridge.send("VKWebAppFlashSetLevel", {"level": 1});
		setTimeout( () => {
			bridge.send("VKWebAppFlashSetLevel", {"level": 0})
		}, 1000)
		setTimeout( () => {
			bridge.send("VKWebAppFlashSetLevel", {"level": 1})
		}, 2000)
		setTimeout( () => {
			bridge.send("VKWebAppFlashSetLevel", {"level": 0})
		}, 3000)
	}

	return (
		<ConfigProvider scheme={scheme}>
			<AdaptivityProvider>
				<AppRoot>
					<View activePanel={activePanel}>
						<Home id='home' go={go} startGame={startGame} />
						<PlayerScreen id='results' go={go} />
						<Game id='game' go={go} players={players} endGame={endGame} playersCount={playersCount}
							  location={location}
							  currentPlayer={currentPlayer}
							  setCurrentPlayer={setCurrentPlayer} />
						<Title>{playersCount}</Title>
					</View>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
