import React , {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

export default class App extends Component  {

    renderButton = () => {
        return (
            <Link to="/login">Login</Link>
        )
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
        return (
            <div>
                {this.renderHeader()}
               <Route path="/post" component={CommentBox}/>
               <Route path="/" exact component={CommentList}/>
            </div>
        )
    }
};