import React from 'react';

import './Timer.scss';

const Timer = ({ className, children }) => (
    <span
        className={`timer ${className}`}
    >
        {children}
    </span>
);

Timer.propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node
    ]),
    className: React.PropTypes.string
};

Timer.defaultProps = {
    className: ''
};

export default Timer;
