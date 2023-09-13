/* eslint-disable jsx-a11y/alt-text */
import "./App.css";
import Datas from "./data/data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1 className="text">devjobs</h1>

        <div className="fonti">
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
      <div className="body">
        {Datas &&
          Datas.map((data) => {
            return (
              <div className="box1" key={data.id}>
                <img
                  className="logo1"
                  style={{ backgroundColor: data.logoBackground }}
                  src={data.logo}
                  alt="icon"
                />
                <br />
                <p className="posted">
                  {data.postedAt} . {data.contract}
                </p>
                <h3 className="position">{data.position}</h3>
                <p className="company">{data.company}</p>
                <br />
                <p className="location">{data.location}</p>
              </div>
            );
          })}
      </div>

      <button>Load More</button>
    </div>
  );
}

export default App;
