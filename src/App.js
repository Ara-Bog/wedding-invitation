import lighthouse from "./img/lighthouse.png";
import wave from "./img/wave.png";
// import bird from "./img/vorobei.jpg";
import goo from "./img/goo.png";

import "./App.css";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";

function App() {
  const [flippedCard, setFlipp] = useState(false);
  const [checkClick, setCheck] = useState(false);

  return (
    <div className="wrap">
      <ReactCardFlip isFlipped={flippedCard}>
        <div
          className="card-main"
          onClick={() => {
            setFlipp(true);
            setCheck(true);
          }}
        >
          <h3 className="h3_withPadd">Пригласительный билет на свадьбу</h3>
          <div className="card-main_title">
            <h1>МИХАИЛА</h1>
            <span>&</span>
            <h1>ЕЛИЗАВЕТЫ</h1>
          </div>
          <div className="card-main_content">
            <img src={lighthouse} alt="lighthouse" />
          </div>
        </div>
        <div className="card-content" onClick={() => setFlipp(false)}>
          <h3 className="h3_withPadd">Дорогие друзья и родные!</h3>
          <p>
            Если вы получили это приглашение, то мы ждем Вас на нашем главном
            событии - свадебном торжестве
          </p>
          <img className="card-content_wave" src={wave} alt="wave" />
          <div className="card-content_dates">
            <div className="card-content_dates_item">
              <span>регистрация новой семьи</span>
              <h2>17.06.23</h2>
              <p className="card-content_dates_item-time">13:00</p>
              <p className="card-content_dates_item-local">
                г. Москва, Флотилия "Рэдиссон Ройал" наб. Тараса Шевченко
              </p>
            </div>
            <div className="card-content_dates_item">
              <span>Свадебное мероприятие</span>
              <h2>04.08.23</h2>
              <p className="card-content_dates_item-time">18:00</p>
              <p className="card-content_dates_item-local">
                г. Владивосток, ул. Лазурная 23б
              </p>
            </div>
          </div>
          {/* <div className="card-content_goo">
          </div> */}
          <img className="goo" src={goo} alt="goo" />
        </div>
      </ReactCardFlip>
      <div
        className="hint"
        style={checkClick ? { display: "none" } : { display: "flex" }}
      >
        <div className="spinner"></div>
      </div>
    </div>
  );
}

export default App;
