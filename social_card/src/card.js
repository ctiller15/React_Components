import React from 'react';
import CardTop from './card-top.js';
import CardMain from './card-main.js';
import CardBottom from './card-bottom.js';
import './card.css';

function SocialCard(props){
	return(
		<section className="card">
			<CardTop author={props.cardProps.topProps}/>
			<CardMain info={props.cardProps.mainProps}/>
			<CardBottom social={props.cardProps.socialProps}/>
		</section>
	);
}

export default SocialCard;