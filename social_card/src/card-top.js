import React from 'react';

function CardTop() {
	return(
		<header className="card-top">
			<div className="author-info">
				<div className="icon">Image icon.</div>
				<div className="creator-name">Author name goes here</div>
			</div>
			<div className="intro-text">
				<p>This is a piece of introuctory text.
				Do you like this introductory text? I think it's pretty great.</p>
			</div>
		</header>
	);
}

export default CardTop;