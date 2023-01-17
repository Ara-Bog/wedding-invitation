import lighthouse from "./img/lighthouse.png";
import "./App.css";

function App() {
  return (
    <div className="wrap">
      <div className="card-main">
        <h3>Пригласительный билет на свадьбу</h3>
        <div className="card-main_title">
          <h1>МИХАИЛА</h1>
          <span>&</span>
          <h1>ЕЛИЗАВЕТЫ</h1>
        </div>
        <div className="card-main_content">
          <img src={lighthouse} alt="lighthouse" />
        </div>
      </div>
    </div>
  );
}

export default App;
