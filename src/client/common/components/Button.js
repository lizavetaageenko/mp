import React from 'react';

import './Button.scss';

const Button = ({ children, className }) => (
    <button
        className={`${className} button`}
    >
        {children}
    </button>
);

Button.propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node
    ]),
    className: React.PropTypes.string
};

Button.defaultProps = {
    className: ''
};

export default Button;
