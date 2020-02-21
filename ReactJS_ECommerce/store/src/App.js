import React, { Fragment } from "react";

import "./App.css";

function App() {
  return (
    <Fragment>
      <div class="w3-container w3-green">
        <h1>W3Schools Demo</h1>
        <p>Resize this responsive page!</p>
      </div>

      <div class="w3-row-padding">
        <div class="w3-third">
          <h2>London</h2>
          <p>London is the capital city of England.</p>
          <p>
            It is the most populous city in the United Kingdom, with a
            metropolitan area of over 13 million inhabitants.
          </p>
        </div>

        <div class="w3-third">
          <h2>Paris</h2>
          <p>Paris is the capital of France.</p>
          <p>
            The Paris area is one of the largest population centers in Europe,
            with more than 12 million inhabitants.
          </p>
        </div>

        <div class="w3-third">
          <h2>Tokyo</h2>
          <p>Tokyo is the capital of Japan.</p>
          <p>
            It is the center of the Greater Tokyo Area, and the most populous
            metropolitan area in the world.
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default App;