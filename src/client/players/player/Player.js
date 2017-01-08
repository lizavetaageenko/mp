import React from 'react';

import heads from '../player-avatar/face-parts/heads';
import eyes from '../player-avatar/face-parts/eyes';
import smiles from '../player-avatar/face-parts/smiles';

import './Player.scss';

export default class Player extends React.Component {
    componentDidMount() {
        this.drawOnCanvas(this.props.avatar);
    }

    drawOnCanvas({ head, eye, smile }) {
        this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);

        heads[head](this.canvas, this.canvasContext);
        eyes[eye](this.canvas, this.canvasContext);
        smiles[smile](this.canvas, this.canvasContext);
    }

    render() {
        return (
            <div className="player">
                <div className="player-image">
                    <canvas
                        className="player__canvas"
                        width="60"
                        height="60"
                        ref={(canvas) => {
                            if (!canvas) {
                                return;
                            }

                            this.canvas = canvas;
                            this.canvasContext = canvas.getContext('2d');
                        }}
                    />
                </div>
                <div className="player-name">{this.props.username}</div>
            </div>
        );
    }
}

Player.propTypes = {
    username: React.PropTypes.string,
    avatar: React.PropTypes.object,
};

Player.defaultProps = {
    username: '',
    avatar: {
        head: 0,
        eye: 0,
        smile: 0
    }
};
