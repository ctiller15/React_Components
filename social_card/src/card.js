import React from 'react';
import CardTop from './card-top.js';
import CardMain from './card-main.js';
import CardBottom from './card-bottom.js';
import './card.css';

class SocialCard extends React.Component {
	constructor(props){
		super(props);
		this.state = {
						topProps: {
							authorImg: "./images/matt-nelson.jpg",
							authorLink: "https://unsplash.com/@mnelson",
							authorText: "Dogs are great. Training them is even better."
						}
					};
	}
	render() {
		return(
			<section className="card">
				<CardTop author={this.state.topProps}/>
				<CardMain/>
				<CardBottom/>
			</section>
		);
	}
}

export default SocialCard;