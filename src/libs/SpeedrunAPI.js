import axios from 'axios';

class SpeedrunAPI
{
    constructor() {
        this.request = axios.create({
            baseURL: 'https://www.speedrun.com/api/v1'
        });
    }

    getGames() {
        return this.request.get('/games');
    }

    getGame(gameId) {
        return this.request.get(`/games/${gameId}`);
    }

    getRunsByGame(gameId) {
        return this.request.get(`/runs?game=${gameId}`);
    }

    getPlayerDetails(playerId) {
        return this.request.get(`/users/${playerId}`);
    }

    getGameWithRuns(gameId) {
        const game = {
            details: null,
            latestRun: null
        };

        return new Promise((resolve, reject) => {
            this.getGame(gameId)
                .then(res => {
                    game.details = res.data.data;
                    return this.getRunsByGame(gameId);
                })
                .then(res => {
                    const latestRun = res.data.data[0];

                    if (!latestRun) {
                        resolve(game)
                    }

                    game.latestRun = latestRun;

                    return this.getPlayerDetails(latestRun.players[0].id);
                })
                .then(res => {
                    game.latestRun.players[0] = res.data.data;
                    resolve(game);
                })
        });
    }
}

export default SpeedrunAPI;