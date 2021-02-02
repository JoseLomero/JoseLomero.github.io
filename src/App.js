import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavigationBar from "./components/nav-bar/nav";
import MainPage from './components/main-page/mainPage';
import Calendario from './components/calendar/calendar';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './App.css';


function App() {

  return (
    <BrowserRouter>
      <NavigationBar />
      <Container fluid>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route path='/calendario' component={Calendario} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
