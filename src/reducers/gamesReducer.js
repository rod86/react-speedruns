import { GET_GAMES, GET_GAME, GAMES_LOADING } from '../actions/types';

const initialState = {
    games: [],
    game: null,
    gameRuns: null,
    loading: false
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GAMES_LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_GAMES:
            return {
                ...state,
                games: action.payload,
                loading: false
            }
        case GET_GAME:
            return {
                ...state,
                game: action.payload,
                loading: false
            }
        default:
            return state;
    }
}