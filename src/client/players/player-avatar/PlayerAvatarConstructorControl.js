import React from 'react';

import Button from '../../common/components/Button';

export default class PlayerAvatarConstructorControl extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            classNamePrefix: 'player-avatar-constructor__control'
        };
    }

    getIcon() {
        const { direction } = this.props;

        return direction === 'prev' ? (<span>&#9664;</span>) : (<span>&#9654;</span>);
    }

    geClassName() {
        const { facePart, direction } = this.props;
        const { classNamePrefix } = this.state;

        return `${classNamePrefix} ${classNamePrefix}_${facePart} ${classNamePrefix}_${direction}`;
    }

    render() {
        return (
            <Button
                className={this.geClassName()}
                onClick={this.props.onClick}
            >
                {this.getIcon()}
            </Button>
        );
    }
}

PlayerAvatarConstructorControl.propTypes = {
    facePart: React.PropTypes.oneOf(['head', 'eyes', 'smile']),
    direction: React.PropTypes.oneOf(['prev', 'next']),
    onClick: React.PropTypes.func
};
