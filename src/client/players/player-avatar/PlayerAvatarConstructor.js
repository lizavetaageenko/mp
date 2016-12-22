import React from 'react';

import './PlayerAvatarConstructor.scss';

import PlayerAvatarConstructorControl from './PlayerAvatarConstructorControl';

import heads from './face-parts/heads';
import eyes from './face-parts/eyes';
import smiles from './face-parts/smiles';

export default class PlayerAvatarConstructor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            head: 0,
            eye: 0,
            smile: 0
        };
    }

    componentWillUpdate(nextProps, nextState) {
        this.drawOnCanvas(nextState);
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

    render() {
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
                    onClick={() => { this.setState({ head: this.prev(heads, this.state.head) }); }}
                />
                <PlayerAvatarConstructorControl
                    facePart="head"
                    direction="next"
                    onClick={() => { this.setState({ head: this.next(heads, this.state.head) }); }}
                />
                <PlayerAvatarConstructorControl
                    facePart="eyes"
                    direction="prev"
                    onClick={() => { this.setState({ eye: this.prev(eyes, this.state.eye) }); }}
                />
                <PlayerAvatarConstructorControl
                    facePart="eyes"
                    direction="next"
                    onClick={() => { this.setState({ eye: this.next(eyes, this.state.eye) }); }}
                />
                <PlayerAvatarConstructorControl
                    facePart="smile"
                    direction="prev"
                    onClick={() => { this.setState({ smile: this.prev(smiles, this.state.smile) }); }}
                />
                <PlayerAvatarConstructorControl
                    facePart="smile"
                    direction="next"
                    onClick={() => { this.setState({ smile: this.next(smiles, this.state.smile) }); }}
                />
            </div>
        );
    }
}

PlayerAvatarConstructor.propTypes = {};
