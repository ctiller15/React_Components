import React from 'react';

function CardMain(props){
	const bgImage = require(`${props.info.bgImage}`);

	var style;

	if(props.info.previewTitle){
		console.log(props.info.previewTitle);
		style = {
			borderLeft: "5px solid var(--borders)"
		}
	} else{
		style = null;
	}

	return(
		<div className="card-main">
			<div className="card-image-bg" style={{backgroundImage: `url(${bgImage})`}}>
				{/*<img src="#" alt="This is the thing we're talking about!"></img>*/}
			</div>
			<div className="card-preview-text" style={style}>
				<h3>{props.info.previewTitle}</h3>
				<p>{props.info.previewText}</p>
			</div>
		</div>
	);
}

export default CardMain;