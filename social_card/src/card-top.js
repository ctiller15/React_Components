import React from 'react';

function CardTop() {
	return(
		<header className="card-top">
			<div className="author-info">
				<div className="icon">
					{/*<img src={require("./images/matt-nelson.jpg")}/>*/}
				</div>
				<div className="creator-name">Matt Nelson via Unsplash</div>
			</div>
			<div className="intro-text">
				<p>Dogs are great. Training them is even better.</p>
			</div>
		</header>
	);
}

export default CardTop;