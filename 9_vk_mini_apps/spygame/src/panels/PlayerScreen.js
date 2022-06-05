import React from 'react';
import PropTypes from 'prop-types';

import {Button, Panel, PanelHeader, PanelHeaderBack} from '@vkontakte/vkui';

const PlayerScreen = props => {

	return (
		<Panel id={props.id}>
			<PanelHeader
				left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
			>
				Конец игры
			</PanelHeader>
			<div style={{ height: 240 }} />
			<Button size="l"
					onClick={props.go} data-to="home">Новая игра</Button>
		</Panel>
	)
};

PlayerScreen.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default PlayerScreen;
