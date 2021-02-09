import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Sections
import MainPage from './sections/main-page/mainPage';
import Components from './sections/components-page/components';
import Portafolio from './sections/portafolio-page/portafolio';
import NotFound from './sections/no-page/no-page';
// import Contact from './sections/contact-page/contact';

// Components
import NavigationBar from "./components/nav-bar/nav";
import Calendario from './components/calendar/calendar';

// Effects
import Aos from 'aos';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'react-bootstrap';

// Internal Import
import "aos/dist/aos.css";
import './App.css';

// initialization
Aos.init();

function App() {
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false)
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop)


  return (
    <BrowserRouter>
      <NavigationBar />
      <Button className="scrollTop" onClick={scrollTop} style={{ height: 40, display: showScroll ? 'flex' : 'none' }}>Top</Button>
      <Container className="fullwidth" fluid>
        <Switch>
          <Route exact path='/homepage' component={MainPage} />
          <Route path='/components' component={Components} />
          <Route path='/portafolio' component={Portafolio} />
          {/* <Route path='/contact' component={Contact} /> */}
          <Route path='/calendario' component={Calendario} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
