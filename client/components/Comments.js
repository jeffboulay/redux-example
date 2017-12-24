import React from 'react';

export default class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const { postId } = this.props.match.params;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        this.props.actions.addComment(postId, author, comment);
        this.refs.commentForm.reset();
    }

    render() {
        const renderComment = (comment, i) => (
            <div className="comment" key={i}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className="remove-comment" onClick={this.props.actions.removeComment.bind(null, this.props.match.params.postId, i)}>&times;</button>
                </p>
            </div>
        );
        const { postComments } = this.props;
        return (
            <div className="comments">
                {postComments.map(renderComment)}
                <form ref="commentForm" onSubmit={this.handleSubmit} className="comment-form">
                    <input type="text" ref="author" placeholder="author" />
                    <input type="text" ref="comment" placeholder="comment" />
                    <input type="submit" hidden/>
                </form>
            </div>
        )
    }
};