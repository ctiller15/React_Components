import React from 'react';

function CardTop() {
	return(
		<header className="card-top">
			<div className="authorInfo">
				<div className="icon">Image icon.</div>
				<div className="creatorName">Author</div>
			</div>
			<div className="introText">This is a piece of introuctory text.</div>
		</header>
	);
}

export default CardTop;