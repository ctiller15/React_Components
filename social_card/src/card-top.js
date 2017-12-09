import React from 'react';


// var iconStyle = {
// 	backgroundImage: url(`${props.author.authorImg}`)
// }

function CardTop(props) {
	// ALWAYS require the image first before trying to use it w/ create-react-app.
	const bgIcon = require(`${props.author.authorImg}`);

	return(
		<header className="card-top">
			<div className="author-info">
				<a href="#" title="this doesn't go anywhere either" className="icon" style={{backgroundImage: `url(${bgIcon})`}}>
					{/*Photo by Matt Nelson on Unsplash*/}
					{/*<img src={require("./images/matt-nelson.jpg")}/>*/}
				</a>
				<div className="creator-name">{props.author.authorName} via <a rel="noopener noreferrer" href={props.author.authorLink} title="This one actually DOES go somewhere though. Click it!" target="_blank">{props.author.authorSite}</a></div>
			</div>
			<div className="intro-text">
				<p>{props.author.authorText}</p>
			</div>
		</header>
	);
}

export default CardTop;