// Remember, 'React' holds the components, while 'ReactDOM' renders it to the DOM.
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SocialCard from './card.js';

// The board will contain all of the indiviual card components.
class Board extends React.Component{
	render(){
		// This will return the social card component.
		return(
			<div className="cardBoard">
				<SocialCard
					cardProps={
						{
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
							},
							socialProps: {
								likes: 10,
								comments: 25,
								subscriptions: 8
							}
						}
					}
				/>
			</div>
		);
	}
}

ReactDOM.render(
	<Board />,
	document.querySelector('#root')
);