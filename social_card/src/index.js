// Remember, 'React' holds the components, while 'ReactDOM' renders it to the DOM.
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SocialCard from './card.js';
import cardData from './data/card-data.js';

// The board will contain all of the indiviual card components.
class Board extends React.Component{
	// This takes the individual card data and creates an array of JSX elements
	cards(){
		return cardData.map((data, ind) => {
			return <SocialCard key={ind} cardProps={data}/>
		});
	}

	render(){
		// This will return the social card component.
		return(
			<div className="cardBoard">
				{this.cards()}
			</div>
		);
	}
}

ReactDOM.render(
	<Board />,
	document.querySelector('#root')
);