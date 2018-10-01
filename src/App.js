import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import GamesList from './components/GamesList/GamesList';
import GameDetails from './components/GameDetails/GameDetails';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Provider store={store}>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={GamesList} />
                            <Route exact path="/game/:id" component={GameDetails} />
                        </Switch>
                    </Router>
                </Provider>
            </div>
        );
    }
}

export default App;
