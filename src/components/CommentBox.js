import React , { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

class CommentBox extends Component {

    state = {
        comment:''
    }
    handleChange = (event) => {
        this.setState({comment:event.target.value});
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.saveComment(this.state.comment);
        this.setState({comment:''});
    }
    render() {
        console.log(this.props)
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <h1>Add a Comment</h1>
                <textarea onChange={this.handleChange} value = {this.state.comment}/>
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
            <button onClick={this.props.fetchComments}>FETCH COMMENTS</button>
            </div>
        )
    }
}

export default connect(null, actions)(CommentBox);