import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./App.css";
import DorfusLogo from "./assets/images/Dorfus.svg";
import GobonaLogo from "./assets/images/Gobona.svg";
import MartinoLogo from "./assets/images/Martino.svg";
import PaperzLogo from "./assets/images/Paperz.svg";
import SquareLogo from "./assets/images/Square.svg";
import BillieEilish from "./assets/images/billie-eilish.webp";
import MicImage from "./assets/images/black-standing-microphone-studio.webp";
import MixingImage from "./assets/images/high-angle-woman-as-dj-mixing-entertaining.webp";
import JennieKim from "./assets/images/jennie-kim.webp";
import DjImage from "./assets/images/low-angle-female-dj-club.webp";
import ProfilePicture1 from "./assets/images/profile-picture-1.webp";
import ProfilePicture2 from "./assets/images/profile-picture-2.webp";
import ProfilePicture3 from "./assets/images/profile-picture-3.webp";
import ProfilePicture4 from "./assets/images/profile-picture-4.webp";
import ShirleyManson from "./assets/images/shirley-manson.webp";
import TaylorSwift from "./assets/images/taylor-swift.webp";
import { blue, green } from "./colors";
import Button from "./components/Button/Button";
import FeatureItem from "./components/FeatureItem/FeatureItem";
import Genre from "./components/Genre/Genre";
import Header from "./components/Header/Header";
import RoundedImage from "./components/RoundedImage/RoundedImage";
import StatisticBlock from "./components/StatisticBlock/StatisticBlock";
import Testimonial from "./components/Testimonial/Testimonial";
import { useEffect } from "react";

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
    photo: ProfilePicture4,
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
  useEffect(() => {
    const observe = (className) => {
      const animate = document.getElementsByClassName(className);

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("scroll-animation");
            }
          });
        },
        { threshold: 0.5 }
      );

      for (let i = 0; i < animate.length; i++) {
        observer.observe(animate[i]);
      }
    };

    observe("animate-left");
    observe("animate-right");
    observe("animate-top");
  }, []);

  return (
    <div>
      <Header />

      <div className="App__hero">
        <div className="App__header-text animate-left">
          <h1 className="gradient-text">
            Music Is The Shorthand <br />
            Of Emotion
          </h1>
        </div>
        <div className="animate-left" style={{ transitionDelay: ".15s" }}>
          <p className="text-large App__subheader-text">
            It's our mission at Musikalis to give you the opportunities to take
            your music as far as you want it to go.
          </p>
        </div>

        <div
          className="App__hero-btns animate-left"
          style={{ transitionDelay: ".3s" }}
        >
          <Button
            label="Get Started"
            bold={true}
            icon={faArrowRight}
            backgroundColor={`rgb(${green})`}
          />

          <Button
            label="See More"
            icon={faArrowRight}
            backgroundColor="transparent"
            textColor="rgba(255, 255, 255, .6)"
          />
        </div>

        <div className="App__hero-images animate-right">
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

      <div
        className="App__statistics animate-left"
        style={{ transitionDelay: ".45s" }}
      >
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
            <h1 className="App__genre-header">Choose your favorite genre</h1>
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
          <Genre label="R&B" imageSrc={BillieEilish} className="animate-left" />
          <Genre
            label="Pop"
            imageSrc={TaylorSwift}
            className="animate-left"
            style={{ transitionDelay: "0.15s" }}
          />
          <Genre
            label="Rock"
            imageSrc={ShirleyManson}
            className="animate-left"
            style={{ transitionDelay: "0.3s" }}
          />
          <Genre
            label="Hip Hop"
            imageSrc={JennieKim}
            className="animate-left"
            style={{ transitionDelay: "0.45s" }}
          />
        </div>
      </div>

      <h1 className="gradient-text App__statement animate-top">
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
                key={`FeatureItem__${index}`}
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
                className="animate-left"
                style={{ transitionDelay: `${0.15 * index}s` }}
              />
            ))}
          </div>
        </div>

        <div className="App__features-image animate-right">
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

        <div className="App__testimonial-list animate-top">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={`Testimonial__${index}`}
              rating={testimonial.rating}
              text={testimonial.text}
              author={testimonial.author}
              date={testimonial.date}
              photo={testimonial.photo}
            />
          ))}
        </div>
      </div>

      <div className="gray-gradient App__footer animate-top">
        <div className="App__footer-header">
          <h1 className="gradient-text">
            Start selling your music <br />
            worldwide today
          </h1>
        </div>

        <p className="text-large App__footer-text">
          Our mission at Musikalis is to give you the <br />
          opportunity to take your music as far as you want.
        </p>

        <div className="App__footer-btns">
          <Button
            label="Get Started"
            bold={true}
            icon={faArrowRight}
            backgroundColor={`rgb(${green})`}
          />

          <Button
            label="See More"
            icon={faArrowRight}
            backgroundColor={"transparent"}
            textColor="rgba(255, 255, 255, .6)"
          />
        </div>

        <div className="App__footer-design" />
      </div>
    </div>
  );
}

export default App;
