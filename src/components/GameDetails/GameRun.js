import React from 'react';
import PropTypes from 'prop-types';

const GameRun = ({ run }) => {
    const player = run.players[0];

    return (
        <div className="game-run">
            <h2>Latest Run</h2>

            <div className="row">
                <div className="col-md-4"><strong>Date</strong></div>
                <div className="col-md-8">{run.date}</div>
            </div>
            <div className="row">
                <div className="col-md-4"><strong>Player</strong></div>
                <div className="col-md-8">{player.names.international}</div>
            </div>
            <div className="row">
                <div className="col-md-4"><strong>Run Time</strong></div>
                <div className="col-md-8">{run.times.primary}</div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <a href={run.videos.links[0].uri} target="_blank">
                        View Video
                    </a>
                </div>
            </div>
        </div>
    )
};

GameRun.propTypes = {
    run: PropTypes.object.isRequired
};

export default GameRun;
