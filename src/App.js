
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React ,{useEffect}from "react";
import Home from './Components/Home/Home';
import Nav from "./Components/Navbar/Navbar";
import Footer from './Components/Footer/Footer';
import Movies from './Components/Movies'
import Cinemas from './Components/Cinemas'
import MovieDetails from "./Components/Movie-Details";
import { Provider, useDispatch, useSelector } from 'react-redux';
import configureStore from './React-Redux/store';
import {UAParser} from 'ua-parser-js';
//import './Styles/NotFound.css';
import 'react-multi-carousel/lib/styles.css';
import CinemaTimes from "./Components/Booking-With-Cinema/CinemaTimes.tsx";
import SignUp from "./Components/Sign up/sign-up";
import SignIn from "./Components/Sign up/sigin-in";
import SelectChair from "./Components/Booking-With-Cinema/select-chair";
import ContactUs from "./Components/Contact Us/ContactUs";
import MovieCheckout from "./Components/Payment/movie-checkout";
import Popcorn from "./Components/popcorn";
import { useSelect } from "./helper";
import { getCurrentDateTimeRequested } from "./React-Redux/Actions/get-current-date-time";


const store = configureStore();

function App() {
  // const selector=useSelect(state=>state.currentDateTimeReducer);
  // const dispatch=useDispatch();
  // useEffect(()=>{console.log(selector)},[selector])
  // useEffect(()=>{dispatch(getCurrentDateTimeRequested())},[])
  

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
                        <CinemaTimes {...props} />
                      )}
                      path="/movie-booking/:id"
                      exact
                    />
                    <Route
                      component={(props) => (
                        <MovieCheckout {...props} />
                      )}
                      path="/movie-checkout"
                      exact
                    />
                    <Route
                      component={(props) => (
                        <SignUp {...props} />
                      )}
                      path="/sign-up"
                      exact
                    />
                    <Route
                    component={(props) => (
                      <SignIn {...props} />
                    )}
                    path="/sign-in"
                    exact
                  />
                  <Route
                  component={(props) => (
                    <SelectChair {...props} />
                  )}
                  path="/select-chair"
                  exact
                />
                <Route
                component={(props) => (
                  <ContactUs {...props} />
                )}
                path="/contact-us"
                exact
              />
              <Route
              component={(props) => (
                <Popcorn{...props} />
              )}
              path="/popcorn"
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