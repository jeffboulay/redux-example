import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/actionCreators';
import Photo from './Photo';
import Comments from './Comments'
export class Single extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {postId } = this.props.match.params;
        const i = this.props.posts.findIndex((post) => post.code === postId);
        const post = this.props.posts[i];
        const postComments = this.props.comments[postId] || [];

        return (
            <div className="single-photo">
            <Photo {...this.props} key={i} i={i} post={post} increment ={this.props.actions.increment}/>
            <Comments postComments={postComments} {...this.props}></Comments>
            </div>
        )
    }
};

function mapStateToProps(state) {
    return {
      posts: state.posts,
      comments: state.comments
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(actions, dispatch)
    };
  }

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Single);