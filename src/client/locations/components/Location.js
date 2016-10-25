import React from 'react';

const Location = ({ name }) => (
    <div className="location">
        <div className="location__title">
            {name}
        </div>
    </div>
);

export default Location;

Location.propTypes = {
    name: React.PropTypes.string
};

Location.defaultProps = {
    name: ''
};
