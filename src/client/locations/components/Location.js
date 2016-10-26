import React from 'react';

import './Location.scss';

const Location = ({ name, className }) => (
    <div className={`location ${className}`}>
        <div className="location__title">
            {name}
        </div>
    </div>
);

export default Location;

Location.propTypes = {
    name: React.PropTypes.string,
    className: React.PropTypes.string
};

Location.defaultProps = {
    name: '',
    className: ''
};
