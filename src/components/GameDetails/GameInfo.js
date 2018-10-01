import React from 'react';
import PropTypes from 'prop-types';
import GameRun from './GameRun';

const GameInfo = ({ game }) => {
    const { details, latestRun } = game;

    return (
        <div className="game-details">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <img className="card-img-top" src={details.assets.logo.uri} alt="Game logo" />
                        <div className="card-body">
                            <h5 className="card-title">{details.names.international}</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <GameRun run={latestRun} />
                </div>   
            </div>
        </div>
    )
};

GameInfo.propTypes = {
    game: PropTypes.object.isRequired
}

export default GameInfo;
