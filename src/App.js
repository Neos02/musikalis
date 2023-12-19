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
import ProfilePicture1 from "./assets/images/profile-picture-1.jpg";
import ProfilePicture2 from "./assets/images/profile-picture-2.jpg";
import ProfilePicture3 from "./assets/images/profile-picture-3.jpg";
import MicImage from "./assets/images/black-standing-micropfone-studio.png";
import DjImage from "./assets/images/low-angle-female-dj-club.jpg";
import MixingImage from "./assets/images/high-angle-woman-as-dj-mixing-entertaining.jpg";
import { blue, gray, green } from "./colors";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import RoundedImage from "./components/RoundedImage/RoundedImage";
import StatisticBlock from "./components/StatisticBlock/StatisticBlock";
import Genre from "./components/Genre/Genre";
import FeatureItem from "./components/FeatureItem/FeatureItem";
import Testimonial from "./components/Testimonial/Testimonial";

const features = [
  {
    header: "The Best Price",
    body: "We offer very cheap and very affordable monthly member prices for you",
  },
  {
    header: "Copyright Free",
    body: "Royalty-free music to download or play online - Get unlimited access to over 40,000 tracks",
  },
  {
    header: "Premium Quality",
    body: "Premium quality that makes Musikalis more elegant and more comfortable to hear",
  },
];

const testimonials = [
  {
    rating: 4,
    text: "Musikalis really helps bring my song to new listeners. Finding people who love my music makes a burnt out spirit blaze again.",
    author: "Didier Drogba",
    date: new Date("01/08/2021"),
    photo: ProfilePicture3,
  },
  {
    rating: 5,
    text: "It's magical to be able to move between generations and discover that funk is still more alive than ever.",
    author: "Alexander",
    date: new Date("02/09/2021"),
    photo: ProfilePicture1,
  },
  {
    rating: 4,
    text: "Musikalis was crucial to making the track even more popular... I have the feeling that this will be only the start of an incredible partnership.",
    author: "Martha Nui",
    date: new Date("11/27/2020"),
    photo: ProfilePicture2,
  },
  {
    rating: 5,
    text: "The integration between Musikalis and TikTok also makes it easy for new musicians to introduce their music to social media users.",
    author: "Jimmy Sullivan",
    date: new Date("03/18/2021"),
    photo: ProfilePicture3,
  },
];

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
          <RoundedImage
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

            <RoundedImage
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
        <img src={PaperzLogo} className="App__sponsor-image" alt="Paperz" />
        <img src={DorfusLogo} className="App__sponsor-image" alt="Dorfus" />
        <img src={MartinoLogo} className="App__sponsor-image" alt="Martino" />
        <img src={SquareLogo} className="App__sponsor-image" alt="Square" />
        <img src={GobonaLogo} className="App__sponsor-image" alt="Gobona" />
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
        <div className="App__features-content">
          <div className="App__features-header">
            <h1>Best Features</h1>
            <div className="App__header-line" />
          </div>

          <div className="App__feature-items">
            {features.map((item, index) => (
              <FeatureItem
                index={index + 1}
                header={item.header}
                body={item.body}
                textColor={
                  index % 2 === 0
                    ? "rgba(255, 255, 255, 0.5)"
                    : "rgb(255, 255, 255)"
                }
                background={
                  index % 2 === 0
                    ? "linear-gradient(to bottom, color-mix(in srgb, white, rgb(var(--gray)) 90%), color-mix(in srgb, black, rgb(var(--gray)) 85%))"
                    : `linear-gradient(to top left, color-mix(in srgb, white, rgb(${green})) -25%, rgb(${blue}))`
                }
              />
            ))}
          </div>
        </div>

        <div className="App__features-image">
          <RoundedImage
            src={MixingImage}
            width="32rem"
            height="40rem"
            border={true}
            borderRadius="1.25rem 1.25rem 1.25rem 16rem"
            alt="DJ Mixing"
          />
        </div>
      </div>

      <div className="App__testimonials">
        <div className="App__testimonial-header">
          <h1>Testimonials from customers</h1>
          <p>Our providers take a hands-on approach to help you see</p>
        </div>

        <div className="App__testimonial-list">
          {testimonials.map((testimonial) => (
            <Testimonial
              rating={testimonial.rating}
              text={testimonial.text}
              author={testimonial.author}
              date={testimonial.date}
              photo={testimonial.photo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
