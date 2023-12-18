import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./App.css";
import DorfusLogo from "./assets/images/Dorfus.svg";
import GobonaLogo from "./assets/images/Gobona.svg";
import MartinoLogo from "./assets/images/Martino.svg";
import PaperzLogo from "./assets/images/Paperz.svg";
import SquareLogo from "./assets/images/Square.svg";
import BillieEilish from "./assets/images/billie-eilish.jpeg";
import TaylorSwift from "./assets/images/taylor-swift.jpeg";
import ShirleyManson from "./assets/images/shirley-manson.jpeg";
import JennieKim from "./assets/images/jennie-kim.jpeg";
import MicImage from "./assets/images/black-standing-micropfone-studio.png";
import DjImage from "./assets/images/low-angle-female-dj-club.jpg";
import { blue, gray, green } from "./colors";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import OvalImage from "./components/OvalImage/OvalImage";
import StatisticBlock from "./components/StatisticBlock/StatisticBlock";
import Genre from "./components/Genre/Genre";

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
          <OvalImage
            src={DjImage}
            alt="DJ"
            width="18rem"
            height="34rem"
            border={true}
          />

          <div className="App__hero-images-right">
            <div className="App__hero-percent-statistic">
              <p className="text-largest">97%</p>
              <p>
                People in the world <br /> love to listen to <br /> music
              </p>
            </div>

            <OvalImage
              src={MicImage}
              alt="Microphone"
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

      <div className="App__sponsors">
        <img src={PaperzLogo} className="App__sponsor-image" />
        <img src={DorfusLogo} className="App__sponsor-image" />
        <img src={MartinoLogo} className="App__sponsor-image" />
        <img src={SquareLogo} className="App__sponsor-image" />
        <img src={GobonaLogo} className="App__sponsor-image" />
      </div>

      <div className="App__genres">
        <div className="App__genre-cta">
          <div className="App__genre-label">
            <h1>Choose your favorite genre</h1>
            <p>
              Music genres from all over the world are here, choose one of them.
            </p>
          </div>

          <Button
            label="See More"
            icon={faArrowRight}
            backgroundColor={`rgb(${green})`}
          />
        </div>

        <div className="App__genre-list">
          <Genre label="R&B" imageSrc={BillieEilish} />
          <Genre
            label="Pop"
            imageSrc={TaylorSwift}
            imageScale={1.3}
            imageX="2rem"
            imageY="1.25rem"
          />
          <Genre
            label="Rock"
            imageSrc={ShirleyManson}
            imageScale={1.2}
            imageY="2rem"
          />
          <Genre
            label="Hip Hop"
            imageSrc={JennieKim}
            imageScale={1.3}
            imageX="1rem"
            imageY="-2.5rem"
          />
        </div>
      </div>

      <h1 className="App__statement">
        Musikalis is the best music platform ever created, Musikalis aims to
        give new singers a place to express their work.
      </h1>

      <div className="App__features">
        <div className="App__features-header">
          <h1>Best Features</h1>
          <div className="App__header-line" />
        </div>
      </div>
    </div>
  );
}

export default App;
