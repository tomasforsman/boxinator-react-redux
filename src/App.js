import React, { Component } from 'react';

import { Provider } from 'react-redux';

import store from './store';
import Posts from './components/Posts';
import PostForm from './components/PostForm';
import NewShipment from './components/NewShipment';
import Home from './components/Home';
import Header from './components/Header'

import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {

    render() {

        return (
            <Provider store={store}>
                <div className="App">
                    <header className="App-header">
                    </header>

                        <Header />

                    <Router>
                        <div>
                            <Route exact path="/home" component={Home} />
                            <Route path="/addbox" component={PostForm} />
                            <Route path="/listboxes" component={Posts} />
                            <Route path="/newshipment" component={NewShipment} />
                        </div>
                    </Router>
                </div>

            </Provider>
        );
    }
}

export default App;
