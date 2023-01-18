import mainPage from "./img/mainPage.jpg";
import contentPage from "./img/contentPage.jpg";
import mainDima from "./img/mainDima.jpg";
import contentDima from "./img/contentDima.jpg";
import contentMisha from "./img/contentMisha.jpg";

import "./App.css";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function MishaPage() {
  const [flippedCard, setFlipp] = useState(false);
  const [checkClick, setCheck] = useState(false);
  function changeVh() {
    document.documentElement.style.setProperty(
      "--vh",
      `${window.innerHeight}px`
    );
  }
  changeVh();
  window.addEventListener("resize", changeVh);
  return (
    <>
      <ReactCardFlip isFlipped={flippedCard}>
        <div
          className="cardBlock"
          onClick={() => {
            setFlipp(true);
            setCheck(true);
          }}
        >
          <img src={mainPage} alt="title invite" />
        </div>
        <div className="cardBlock" onClick={() => setFlipp(false)}>
          <img src={contentMisha} alt="content invite" />
        </div>
      </ReactCardFlip>
      <div
        className="hint"
        style={checkClick ? { display: "none" } : { display: "flex" }}
      >
        <div className="spinner"></div>
      </div>
    </>
  );
}
function DefaultPage() {
  const [flippedCard, setFlipp] = useState(false);
  const [checkClick, setCheck] = useState(false);
  function changeVh() {
    document.documentElement.style.setProperty(
      "--vh",
      `${window.innerHeight}px`
    );
  }
  changeVh();
  window.addEventListener("resize", changeVh);
  return (
    <>
      <ReactCardFlip isFlipped={flippedCard}>
        <div
          className="cardBlock"
          onClick={() => {
            setFlipp(true);
            setCheck(true);
          }}
        >
          <img src={mainPage} alt="title invite" />
        </div>
        <div className="cardBlock" onClick={() => setFlipp(false)}>
          <img src={contentPage} alt="content invite" />
        </div>
      </ReactCardFlip>
      <div
        className="hint"
        style={checkClick ? { display: "none" } : { display: "flex" }}
      >
        <div className="spinner"></div>
      </div>
    </>
  );
}
function DimkaPage() {
  const [flippedCard, setFlipp] = useState(false);
  const [checkClick, setCheck] = useState(false);
  function changeVh() {
    document.documentElement.style.setProperty(
      "--vh",
      `${window.innerHeight}px`
    );
  }
  changeVh();
  window.addEventListener("resize", changeVh);
  return (
    <>
      <ReactCardFlip isFlipped={flippedCard}>
        <div
          className="cardBlock"
          onClick={() => {
            setFlipp(true);
            setCheck(true);
          }}
        >
          <img src={mainDima} alt="title invite" />
        </div>
        <div className="cardBlock" onClick={() => setFlipp(false)}>
          <img src={contentDima} alt="content invite" />
        </div>
      </ReactCardFlip>
      <div
        className="hint"
        style={checkClick ? { display: "none" } : { display: "flex" }}
      >
        <div className="spinner"></div>
      </div>
    </>
  );
}
function App() {
  return (
    <BrowserRouter>
      <div className="wrap">
        <Routes>
          <Route path="wedding-invitation/" index element={<DefaultPage />} />
          <Route path="wedding-invitation/special" element={<MishaPage />} />
          <Route path="wedding-invitation/dimka" element={<DimkaPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
