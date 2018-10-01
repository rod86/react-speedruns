import { GET_GAMES, GET_GAME, GAMES_LOADING } from './types';
import SpeedrunAPI from '../libs/SpeedrunAPI';

export const setGamesLoading = () => ({ type: GAMES_LOADING });

export const getGames = () => dispatch => {
    dispatch(setGamesLoading());
    const api = new SpeedrunAPI();
    api.getGames()
        .then(res => dispatch({ type: GET_GAMES, payload: res.data.data }))
        .catch(err => console.log(err));
};

export const getGameWithRuns = id => dispatch => {
    dispatch(setGamesLoading());
    const api = new SpeedrunAPI();
    api.getGameWithRuns(id)
        .then(res => dispatch({ type: GET_GAME, payload: res }))
        .catch(err => console.error(err));
}