import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux'

import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
import store, { history } from './store';

//import css
import css from './styles/style.styl'


export default class App extends Component {
    render() {
        return (
            <Provider store={store} >
                <Router history={history}>
                    <div>
                        <h1>
                            <Link to="/">Reduxstagram</Link>
                        </h1>
                        <Route path="/view/:postId" component={Single} />
                        <Route path="/" exact={true} component={PhotoGrid} />
                    </div>
                </Router>
            </Provider>
        );
    }
}
