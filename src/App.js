import logo from "./logo.svg";
import "./App.css";

function App() {
  const diffDays = () => {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date(1640048442000); // 7th Dec 2021
    console.log("firstDate >>", firstDate);
    const secondDate = new Date(Date.now());
    console.log("secondDate >>", secondDate);
    const diffDays =
      Math.round(Math.abs((firstDate - secondDate) / oneDay)) + 1;
    return diffDays;
  };
  return (
    <div className="App">
      <div className="OuterContainer">

        <div className="eachChallenge">
          <div className="challengeNo">1.) </div>
          <div className="challengeName">#90DaysReadingChallenge</div>
          <div className="dayNo">Day : {diffDays()}</div>
        </div>

        {/* <div className="eachChallenge">
          <div className="challengeNo">1.) </div>
          <div className="challengeName">#90DaysWritingChallenge.......................................</div>
          <div className="dayNo">Day : {diffDays()}</div>
        </div> */}

      </div>
    </div>
  );
}

export default App;
