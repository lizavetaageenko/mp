import React from 'react';
import { connect } from 'react-redux';

import './common/styles/app.scss';

import { getGameStatus } from './game/gameActions';

class App extends React.Component {
    componentWillMount() {
        this.props.getGameStatus();
    }

    render() {
        const { children } = this.props;

        return (<div>{children}</div>);
    }
}

App.propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node
    ]),
    getGameStatus: React.PropTypes.func.isRequired
};

export default connect(
    null,
    (dispatch) => ({
        getGameStatus() { dispatch(getGameStatus()); }
    })
)(App);
