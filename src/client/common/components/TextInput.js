import React from 'react';

import './TextInput.scss';

const TextInput = (props) => {
    const { className } = props;

    return (
        <input
            {...props}
            type="text"
            className={`${className} text-input`}
        />
    );
};

TextInput.propTypes = {
    className: React.PropTypes.string
};

TextInput.defaultProps = {
    className: ''
};

export default TextInput;
