import './App.css';
import React from 'react';
import SignupForm from './componentes/Form.js';
import NavigationBar from './componentes/NavBar.jsx';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <header>
        <NavigationBar className="App-Header" />
        </header>
        <Switch>
          <Route path="/login" exact component={() => <SignupForm />} />
          {/* Agregar resto de componentes. */}
        </Switch>
      </Router>
      <main>
        <SignupForm />
      </main>
    </div>
  );
}
export default App;
