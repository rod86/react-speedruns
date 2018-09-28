import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import SpeedrunList from './components/Speedrun/SpeedrunList';
import SpeedrunDetail from './components/Speedrun/SpeedrunDetail';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Provider store={store}>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={SpeedrunList} />
                            <Route exact path="/view" component={SpeedrunDetail} />
                        </Switch>
                    </Router>
                </Provider>
            </div>
        );
    }
}

export default App;
