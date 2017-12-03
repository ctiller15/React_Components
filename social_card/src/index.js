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
				<SocialCard/>
			</div>
		);
	}
}

ReactDOM.render(
	<Board/>,
	document.querySelector('#root')
);