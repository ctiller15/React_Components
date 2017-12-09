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

	componentDidMount(){
		this.refs.socialButtons.childNodes.forEach((item) => {
			console.log(item.childNodes[1]);
			item.childNodes[1].addEventListener("animationend", (e) => {
				console.log("animation ended!");
				console.log(item.childNodes[1].classList);
				item.childNodes[1].classList.remove("animated");
			});
		});
	}

	componentWillUpdate(nextProps, nextState){
		console.log("State changed!", nextProps, nextState);
	}

	increment(event, stateVar, varName) {
		// event.target.classList.toggle("animated");
		var eventItem = event.currentTarget.childNodes[1];
		// eventItem.addEventListener("animationEnd", () => {
		// 	console.log("Animation ended!");
		// })
		console.log(eventItem);
		console.log(eventItem.classList);
		eventItem.classList.add("animated");
		// console.log(event.target, stateVar, varName);
		this.setState({[varName]: stateVar + 1});
	}

	render() {
		return(
			<div className="card-bottom">
				<ul className="social" ref={"socialButtons"}>
					<li ref={"socialButton"} onClick={(e) => this.increment(e, this.state.likes, "likes")}><i className="fa fa-thumbs-o-up" aria-hidden="true"></i><span className="count">{this.state.likes}</span></li>
					<li ref={"socialButton"} onClick={(e) => this.increment(e, this.state.comments, "comments")}><i className="fa fa-comment-o" aria-hidden="true" ></i><span className="count">{this.state.comments}</span></li>
					<li ref={"socialButton"} onClick={(e) => this.increment(e, this.state.subscriptions, "subscriptions")}><i className="fa fa-share-alt" aria-hidden="true" ></i><span className="count">{this.state.subscriptions}</span></li>
				</ul>
			</div>
		);
	}
}

export default CardBottom;