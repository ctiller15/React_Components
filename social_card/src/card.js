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
							authorName: "Matt Nelson",
							authorImg: "./images/matt-nelson.jpg",
							authorLink: "https://unsplash.com/@mnelson",
							authorText: "Dogs are great. Training them is even better."
						},
						mainProps: {
							bgImage: "./images/matt-nelson-259365.jpg",
							previewTitle: "Find a trainer near you!",
							previewText: "Take a moment and search for the best, most effective dog trainers in your area."
						}
					};
	}
	render() {
		return(
			<section className="card">
				<CardTop author={this.state.topProps}/>
				<CardMain info={this.state.mainProps}/>
				<CardBottom/>
			</section>
		);
	}
}

export default SocialCard;