import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import { blue, gray, green } from "./colors";
import DjImage from "./assets/images/low-angle-female-dj-club.jpg";
import MicImage from "./assets/images/black-standing-micropfone-studio.png";
import OvalImage from "./components/OvalImage/OvalImage";
import StatisticBlock from "./components/StatisticBlock/StatisticBlock";
import "./App.css";

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

        <div className="App__hero-images">
          <OvalImage src={DjImage} width="18rem" height="34rem" border={true} />

          <div className="App__hero-images-right">
            <div className="App__hero-percent-statistic">
              <p className="text-largest">97%</p>
              <p>
                People in the world <br /> love to listen to <br /> music
              </p>
            </div>

            <OvalImage
              src={MicImage}
              width="14rem"
              height="19rem"
              imageBg={`linear-gradient(to bottom, color-mix(in srgb, white, rgb(${green})) -25%, rgb(${blue}))`}
            />
          </div>
        </div>
      </div>

      <div className="App__statistics">
        <StatisticBlock count="320K" unit="Customers" />
        <StatisticBlock count="47K" unit="Tracks" />
      </div>

      <div className="App__sponsors"></div>
    </div>
  );
}

export default App;
