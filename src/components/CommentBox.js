import React , { Component } from 'react';

class CommentBox extends Component {

    state = {
        comment:''
    }
    handleChange = (event) => {
        this.setState({comment:event.target.value});
    }
    handleSubmit = (event) => {
        event.preventDefault();
        // Call Action Creator And save the comment

        // Clear comment text
        this.setState({comment:''});
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Add a Comment</h1>
                <textarea onChange={this.handleChange} value = {this.state.comment}/>
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
        )
    }
}

export default CommentBox;