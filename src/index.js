import React, {Component} from 'react';

import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//COMPONENTS
import Home from './components/home';
import Post from './components/post';
import Profile from './components/profile';

class App extends Component {

    state = {
        description: 'lorem ipsum'
    }

    a = (a, b) => {
        return a + b;
    }

    render(){
        return (
            <BrowserRouter>
                <div>
                    {this.a(1, 2)}
                    <Route path="/profile" component={Profile}/>
                    <Route path="/post" component={Post}/>
                    <Route path="/" exact component={Home}/>
                </div>
            </BrowserRouter>
        );
    }

}


ReactDOM.render(<App/>, document.querySelector('#root'));
