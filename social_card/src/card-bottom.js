import React from 'react';

function CardBottom(){
	return(
		<div className="card-bottom">
			<ul className="social">
				<li><i className="fa fa-thumbs-o-up" aria-hidden="true"></i><span className="count">10</span></li>
				<li><i className="fa fa-comment" aria-hidden="true"></i><span className="count">25</span></li>
				<li><i className="fa fa-share-alt" aria-hidden="true"></i><span className="count">8</span></li>
			</ul>
		</div>
	);
}

export default CardBottom;