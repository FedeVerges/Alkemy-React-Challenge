import './App.css';
import React, { useEffect} from 'react';
import SignupForm from './componentes/Form.js';
import Equipo from './pages/Equipo.js';
import Error from './pages/Error.js';
import NavigationBar from './componentes/NavBar.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { UserContextProvider } from './context/UserContext';
import useUser from './hooks/useUser';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
      <Router>
        <header>
          <NavigationBar className="App-Header" />
        </header>
        <main>
          <Switch>
            <Route exact path="/" >
              <Equipo />
            </Route>
            <Route exact path="/login" component={() => <SignupForm />} />
            <Route exact path={ "/equipo"} component={() => <Equipo />} />
            <Route exact path={"*"} component={() => <Error message="No se ha encontrado la pagina" />} />
        </Switch>
        </main>
      </Router>
      </UserContextProvider>
    </div>
  );
}
export default App;
