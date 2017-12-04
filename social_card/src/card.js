import React from 'react';
import CardTop from './card-top.js';
import CardMain from './card-main.js';
import CardBottom from './card-bottom.js';
import './card.css';

class SocialCard extends React.Component {
	render() {
		return(
			<section className="card">
				<CardTop/>
				<CardMain/>
				<CardBottom/>
			</section>
		);
	}
}

export default SocialCard;