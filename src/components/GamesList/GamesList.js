import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Layout from '../Layout/Layout';
import { getGames } from '../../actions/gameActions';
import Spinner from '../Global/Spinner';
import GameItem from './GameItem';

class GamesList extends Component {

    static propTypes = {
        games: PropTypes.object.isRequired,
        getGames: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getGames();
    }

    render() {
        const { loading, games } = this.props.games;

        return (
            <Layout>
                <h1>Games List</h1>

                {(loading || !games ? (<Spinner />) : (
                    <ul className="list-unstyled">
                        {games.map(item => (<GameItem key={item.id} game={item} />))}    
                    </ul>
                ))}
            </Layout>
        )
    }
}

const mapStateToProps = state => ({
    games: state.games
});

export default connect(mapStateToProps, { getGames })(GamesList);