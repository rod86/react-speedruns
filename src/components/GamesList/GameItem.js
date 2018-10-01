import React from 'react';
import PropTypes from 'prop-types';

const GameItem = ({ game }) => {
    return (
        <li className="media">
            <img className="align-self-start mr-3" ssrc={game.assets.logo.uri} alt="Game logo" />
            <div className="media-body">
                <h5 className="mt-0 mb-1">{game.names.international}</h5>
                <div className="text-right">
                    <a href={`/game/${game.id}`} className="btn btn-primary">View</a>
                </div>
            </div>
        </li>
    )
};

GameItem.propTypes = {
    game: PropTypes.object.isRequired
}

export default GameItem;
