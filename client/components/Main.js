import React from 'react';
import { Link, Route } from 'react-router-dom'

import Single from './Single';
import PhotoGrid from './PhotoGrid';
export default class Main extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    <Link to="/">Reduxstagram</Link>
                </h1>
                <Route path="/view/:postId" component={Single} />
                <Route path="/" exact={true} component={PhotoGrid} />
            </div>
        );
    }
}
