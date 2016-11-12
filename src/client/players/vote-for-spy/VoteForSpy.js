import React from 'react';

import './VoteForSpy.scss';

import Button from '../../common/components/Button';
import PlayersList from '../players-list/PlayersList';

const VoteForSpy = () => (
    <div className="vote-for-spy-page">
        <PlayersList />

        <div className="vote-for-spy-page__button-container">
            <Button className="vote-for-spy-page__vote-button">
                Vote
            </Button>
        </div>
    </div>
);

export default VoteForSpy;
