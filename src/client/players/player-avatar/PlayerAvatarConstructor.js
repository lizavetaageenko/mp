import React from 'react';
import { isEqual } from 'lodash';

import './PlayerAvatarConstructor.scss';

import PlayerAvatarConstructorControl from './PlayerAvatarConstructorControl';

import heads from './face-parts/heads';
import eyes from './face-parts/eyes';
import smiles from './face-parts/smiles';

export default class PlayerAvatarConstructor extends React.Component {
    componentDidMount() {
        this.drawOnCanvas(this.props.avatar);
    }

    componentWillUpdate(nextProps) {
        if (!isEqual(this.props.avatar, nextProps.avatar)) {
            this.drawOnCanvas(nextProps.avatar);
        }
    }

    drawOnCanvas({ head, eye, smile }) {
        this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);

        heads[head](this.canvas, this.canvasContext);
        eyes[eye](this.canvas, this.canvasContext);
        smiles[smile](this.canvas, this.canvasContext);
    }

    next(array, currentIndex) {
        return (currentIndex + 1) % array.length;
    }

    prev(array, currentIndex) {
        return currentIndex - 1 > -1
             ? currentIndex - 1
             : array.length - 1;
    }

    updateAvatar(newValue) {
        this.props.onChange(
            Object.assign({}, this.props.avatar, newValue)
        );
    }

    render() {
        const { avatar } = this.props;

        return (
            <div className="player-avatar-constructor">
                <div className="player-avatar-constructor__canvas-container">
                    <canvas
                        className="player-avatar-constructor__canvas"
                        width="100"
                        height="100"
                        ref={(canvas) => {
                            if (!canvas) {
                                return;
                            }

                            this.canvas = canvas;
                            this.canvasContext = canvas.getContext('2d');
                        }}
                    />
                </div>
                <PlayerAvatarConstructorControl
                    facePart="head"
                    direction="prev"
                    onClick={() => { this.updateAvatar({ head: this.prev(heads, avatar.head) }); }}
                />
                <PlayerAvatarConstructorControl
                    facePart="head"
                    direction="next"
                    onClick={() => { this.updateAvatar({ head: this.next(heads, avatar.head) }); }}
                />
                <PlayerAvatarConstructorControl
                    facePart="eyes"
                    direction="prev"
                    onClick={() => { this.updateAvatar({ eye: this.prev(eyes, avatar.eye) }); }}
                />
                <PlayerAvatarConstructorControl
                    facePart="eyes"
                    direction="next"
                    onClick={() => { this.updateAvatar({ eye: this.next(eyes, avatar.eye) }); }}
                />
                <PlayerAvatarConstructorControl
                    facePart="smile"
                    direction="prev"
                    onClick={() => { this.updateAvatar({ smile: this.prev(smiles, avatar.smile) }); }}
                />
                <PlayerAvatarConstructorControl
                    facePart="smile"
                    direction="next"
                    onClick={() => { this.updateAvatar({ smile: this.next(smiles, avatar.smile) }); }}
                />
            </div>
        );
    }
}

PlayerAvatarConstructor.propTypes = {
    avatar: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired
};
