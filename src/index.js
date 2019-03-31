import React, { useContext, useReducer } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './app.css';

import Home from './pages/Home';
import About from './pages/About';
import Setting from './pages/Setting';

import Store from './modules/home/context';
import reducer from './modules/home/reducer';

import { usePersistedContext, usePersistedReducer } from './usePersist';

function App() {
  const globalStore = usePersistedContext(useContext(Store), 'state');
  const [state, dispatch] = usePersistedReducer(
    useReducer(reducer, globalStore),
    'state'
  );

  return (
    <Store.Provider value={{ state, dispatch }}>
      <Router>
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/setting">Setting</Link>
          </li>
        </ul>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/setting" component={Setting} />
      </Router>
    </Store.Provider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
