import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getGameWithRuns } from '../../actions/gameActions';
import Layout from '../Layout/Layout';
import Spinner from '../Global/Spinner';
import GameInfo from './GameInfo';

class GameDetails extends Component {

    static propTypes = {
        games: PropTypes.object.isRequired,
        getGameWithRuns: PropTypes.func.isRequired
    }

    componentDidMount() {
        const gameId = this.props.match.params.id;
        this.props.getGameWithRuns(gameId);
    }

    render() {
        const { loading, game } = this.props.games;
      
        return (
            <Layout>
                <h1>Game Details</h1>
                
                {(loading || game === null ? (<Spinner />) : (
                    <GameInfo game={game} />
                ))}
            </Layout>
        )
    }
}

const mapStateToProps = state => ({
    games: state.games
});

export default connect(mapStateToProps, { getGameWithRuns })(GameDetails);
