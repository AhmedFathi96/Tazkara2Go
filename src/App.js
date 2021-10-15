
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Home from './Components/Home/Home';
import Nav from "./Components/Navbar/Navbar";
import Footer from './Components/Footer/Footer';
import Movies from './Components/Movies'
import Cinemas from './Components/Cinemas'
import MovieDetails from "./Components/Movie-Details";
import Booking from "./Components/Booking-With-Cinema/Booking";
import { Provider } from 'react-redux';
import configureStore from './React-Redux/store';
import {UAParser} from 'ua-parser-js';
//import './Styles/NotFound.css';
import 'react-multi-carousel/lib/styles.css';

const store = configureStore();

function App() {
  



  return (
    <Provider store={store}>
    <React.Fragment>
        <Router>
          <Route render={(props) => <Nav {...props} deviceType={props.deviceType} />} />
          <Switch>
                      <Route
                        component={(props) => (
                          <Home {...props}  deviceType={props.deviceType}/>
                        )}
                        path="/"
                        exact
                      />
                
                      <Route
                        component={(props) => (
                          <Movies {...props} />
                        )}
                        path="/movies"
                        exact
                      />
                      <Route
                        component={(props) => (
                          <Movies {...props} />
                        )}
                        path="/cinema/:id/movies"
                        exact
                      />
                      <Route
                        component={(props) => (
                          <Cinemas {...props} />
                        )}
                        path="/cinemas"
                        exact
                      />
                      
                      <Route
                        component={(props) => (
                          <MovieDetails {...props}  deviceType={props.deviceType}/>
                        )}
                        path="/movie-details/:id"
                        exact
                      />
                      <Route
                      component={(props) => (
                        <Booking {...props} />
                      )}
                      path="/movie-booking/:id"
                      exact
                    />
          </Switch>

          <Route render={(props) => <Footer {...props} />} />
        </Router>
    </React.Fragment>
    </Provider>
  );
};

export default  function () {
  return (
    <Provider store={store}> 
      <App /> 
    </Provider>
  )
}


App.getInitialProps = ({ req }) => {
  let userAgent;
  if (req) {
    userAgent = req.headers["user-agent"];
  } else {
    userAgent = navigator.userAgent;
  }
  const parser = new UAParser();
  parser.setUA(userAgent);
  const result = parser.getResult();
  const deviceType = (result.device && result.device.type) || "desktop";
  return { deviceType };
};