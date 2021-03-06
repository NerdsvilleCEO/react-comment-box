import React from 'react';

class Comment extends React.Component {
    constructor(props) {
		super(props);
	
	}
	
	static propTypes = {
		author: React.PropTypes.string,
		children: React.PropTypes.string
	};

	render() {
		return(
			<div className="comment">
				<h2 className="commentAuthor">
					{this.props.author}
				</h2>
				{this.props.children}
			</div>
		);
	}
}

export default Comment;
