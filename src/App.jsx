//Filename ./src/App.jsx
// Import react
import React from "react";
import ControlledCarousel from "./ControlledCarousel";
import HeaderNavbar from "./HeaderNavbar";
import Footer from "./Footer";
import Items from "./Items";

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <HeaderNavbar />
          <ControlledCarousel />
          <Items />
          <Footer />
        </div>
      </div>
    );
  }
}
export default App;
