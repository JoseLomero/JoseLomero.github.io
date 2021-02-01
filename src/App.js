import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from "./components/nav-bar/nav";
import MainPage from './components/main-page/mainPage';
import Calendario from './components/calendar/calendar';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/calendario' component={Calendario} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
