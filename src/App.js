import Header from "./components/Header/Header";

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
      </div>
    </div>
  );
}

export default App;
