import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Header from './components/common/Header';
import List from './components/list/list';
import NotFound from './components/404/NotFound';
import Details from './components/details/Details';
import './App.scss';

class App extends React.Component {
    render(){
        return (
            <HashRouter basename={process.env.PUBLIC_URL}>
                <div>
                    <Header />

                    <Switch>
                        <Route path="/" component={List} exact />
                        <Route path="/currency/:id" component={Details} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}

export default App;