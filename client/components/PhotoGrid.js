import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/actionCreators';
import Photo from './Photo';

export class PhotoGrid extends React.Component{
    render() {
        return(
            <div className="photo-grid">
                {this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post} increment ={this.props.actions.increment}/>)}
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
  )(PhotoGrid);