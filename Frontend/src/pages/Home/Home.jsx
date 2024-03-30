import React from "react";
import './Home.css'
import Card from '/src/pages/Card.jsx'

function Home() {
  return (
    <>
      <div id="iframeContainer">
        <iframe src="http://127.0.0.1:8050/" scrolling="no"></iframe>
      </div>
      <h1>Artificial Intelligence</h1>
      <Card />
      <h1>Iot</h1>
      <Card />
      <h1>Programming Languages</h1>
      <Card />
    </>
  );
}

export default Home;
