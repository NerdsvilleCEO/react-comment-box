import React from 'react';

import Comment from './Comment.jsx'
class CommentList extends React.Component {
    constructor(props) {
	    super(props);
	}

	render() {
	    return(
			<div className="commentList">
				<Comment author="Test">Test Text</Comment>
			</div>
		);
	}
}

export default CommentList;
