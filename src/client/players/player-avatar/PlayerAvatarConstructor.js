import React from 'react';

import './PlayerAvatarConstructor.scss';

import PlayerAvatarConstructorControl from './PlayerAvatarConstructorControl';

const heads = [
    (canvas, context) => {
        const { width, height } = canvas;

        context.strokeStyle = '#777';
        context.lineWidth = '5';
        context.strokeRect(width * 0.1, height * 0.1, width - (width * 0.2), height - (height * 0.2));
    },
    (canvas, context) => {
        const { width, height } = canvas;

        context.beginPath();
        context.strokeStyle = '#777';
        context.lineWidth = '5';
        context.arc(width / 2, height / 2, height * 0.4, 0, 2 * Math.PI);
        context.stroke();
    },
    (canvas, context) => {
        const { width, height } = canvas;

        context.beginPath();
        context.strokeStyle = '#777';
        context.lineWidth = '5';

        context.moveTo(width * 0.1, height * 0.1);
        context.lineTo(width * 0.9, height * 0.1);
        context.lineTo(width * 0.5, height * 0.8);

        context.closePath();

        context.stroke();
    }
];

export default class PlayerAvatarConstructor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentFace: {
                head: 0,
                eyes: 0,
                smile: 0
            }
        };
    }

    componentWillUpdate(nextProps, nextState) {
        this.drawOnCanvas(nextState.currentFace);
    }

    drawOnCanvas({ head, eyes, smile }) {
        this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);

        heads[head](this.canvas, this.canvasContext);
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
                    onClick={() => {
                        this.setState({
                            currentFace: {
                                head: this.state.currentFace.head - 1 > -1
                                    ? this.state.currentFace.head - 1
                                    : heads.length - 1
                            }
                        });
                    }}
                />
                <PlayerAvatarConstructorControl
                    facePart="head"
                    direction="next"
                    onClick={() => {
                        this.setState({
                            currentFace: {
                                head: (this.state.currentFace.head + 1) % heads.length
                            }
                        });
                    }}
                />
                <PlayerAvatarConstructorControl facePart="eyes" direction="prev" />
                <PlayerAvatarConstructorControl facePart="eyes" direction="next" />
                <PlayerAvatarConstructorControl facePart="smile" direction="prev" />
                <PlayerAvatarConstructorControl facePart="smile" direction="next" />
            </div>
        );
    }
}

PlayerAvatarConstructor.propTypes = {};
