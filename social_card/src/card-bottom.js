import React from 'react';

class CardBottom extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			likes: props.social.likes,
			comments: props.social.comments,
			subscriptions: props.social.subscriptions
		}
	}

	increment(stateVar, varName) {
		console.log(stateVar, varName);
		this.setState({[varName]: stateVar + 1});
	}

	render() {
		return(
			<div className="card-bottom">
				<ul className="social">
					<li onClick={() => this.increment(this.state.likes, "likes")}><i className="fa fa-thumbs-o-up" aria-hidden="true"></i><span className="count">{this.state.likes}</span></li>
					<li onClick={() => this.increment(this.state.comments, "comments")}><i className="fa fa-comment" aria-hidden="true" ></i><span className="count">{this.state.comments}</span></li>
					<li onClick={() => this.increment(this.state.subscriptions, "subscriptions")}><i className="fa fa-share-alt" aria-hidden="true" ></i><span className="count">{this.state.subscriptions}</span></li>
				</ul>
			</div>
		);
	}
}

export default CardBottom;