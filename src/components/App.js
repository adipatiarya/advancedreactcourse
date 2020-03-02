import React , {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from 'actions';

import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';


class App extends Component  {

    renderButton = () => {

        let button =  <button onClick={()=>this.props.changeAuth(true)}>Sign In</button>
        if (this.props.auth) {
           button = <button onClick={()=>this.props.changeAuth(false)}>Sign Out</button>
        }
        return button;
       
    }
    renderHeader = () => {
        return (
            <nav>
                <Link to="/">Home</Link> {" "}
                <Link to="/post">Post</Link> {" "}
                {this.renderButton()}
            </nav>
        )
    }
    render() {

        console.log(this.props)
        return (
            <div>
                {this.renderHeader()}
               <Route path="/post" component={CommentBox}/>
               <Route path="/" exact component={CommentList}/>
            </div>
        )
    }
};
const mapStateToProps = (state) => {
    return {
        auth:state.auth
    }
}

export default connect(mapStateToProps, actions)(App);