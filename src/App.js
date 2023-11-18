import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import "./App.css";
import { gray, green } from "./colors";

function App() {
  return (
    <div>
      <Header />

      <div className="App__hero">
        <div className="App__header-text">
          <h1>Music Is The Shorthand</h1>
          <h1 className="App__header-text-low-opacity">Of Emotion</h1>
        </div>
        <div>
          <p className="text-large App__subheader-text">
            It's our mission at RouteNote to give you the opportunities <br />
            to take your music as far as you want it to go.
          </p>
        </div>

        <div className="App__hero-btns">
          <Button
            label="Get Started"
            bold={true}
            icon={faArrowRight}
            backgroundColor={`rgb(${green})`}
          />

          <Button
            label="See More"
            icon={faArrowRight}
            backgroundColor={`rgb(${gray})`}
            textColor="rgba(255, 255, 255, .6)"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
