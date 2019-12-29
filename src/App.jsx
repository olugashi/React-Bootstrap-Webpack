//Filename ./src/App.jsx
// Import react
import React from "react";
import ControlledCarousel from "./ControlledCarousel";
import HeaderNavbar from "./HeaderNavbar";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <HeaderNavbar />
          <ControlledCarousel />
          <h1 className="display-4">Amazing React, Bootstrap and Webpack</h1>
          <p className="lead">Created with love</p>
          <hr className="my-4" />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">
              Learn more
            </a>
          </p>
          <Footer />
        </div>
      </div>
    );
  }
}
export default App;
