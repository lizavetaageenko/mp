import React from 'react';

import './Logo.scss';

const Logo = ({ className }) => (
    <div className={`logo ${className}`}>
        <span className="js">JS</span>py
    </div>
);

Logo.propTypes = {
    className: React.PropTypes.string
};

Logo.defaultProps = {
    className: ''
};

export default Logo;
