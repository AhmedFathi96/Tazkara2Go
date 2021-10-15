import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  state = {
    allmovies: [],
  };

  componentDidMount = async () => {
    let allmovies = this.props.allmovies;
    await this.setState({ allmovies });
  };

  render() {
    return (
      <React.Fragment>
        <header className="header-section">
          <div className="container">
            <div className="header-wrapper">
              <div className="logo">
                <Link to="/">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/images/logo/logo.png"
                    }
                    alt="logo"
                  />
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </div>
              <ul className="menu">
                <li>
                  <Link to="/" className="active">
                    Home
                  </Link>
                </li>
                <li>
                  <a href="#0">movies</a>
                  <ul className="submenu">
                    {this.props.allmovies.map((c) => (
                      <li key={c.ShowId}>
                        <Link to={`/movie-details/${c.ShowId}`}>
                          {c.ShowNam}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <a href="#0">events</a>
                  <ul className="submenu">
                    <li>
                      <a href="events.html">Events</a>
                    </li>
                    <li>
                      <a href="event-details.html">Event Details</a>
                    </li>
                    <li>
                      <a href="event-speaker.html">Event Speaker</a>
                    </li>
                    <li>
                      <a href="event-ticket.html">Event Ticket</a>
                    </li>
                    <li>
                      <a href="event-checkout.html">Event Checkout</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="contact.html">contact</a>
                </li>
                <li className="header-button pr-0">
                  <a href="sign-up.html">join us</a>
                </li>
              </ul>
              <div className="header-bar d-lg-none">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}
export default Nav;
