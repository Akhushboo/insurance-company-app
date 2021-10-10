// client/src/App.js

import React from "react";
import "./App.css";
import LineChart from "./Chart";
import PolicyTable from './Table';

function App() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch("/getRecords")
      .then((res) => res.json())
      .then((data) => setData(data.results));
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h3>{'Insurance Company App'}</h3>
        <PolicyTable data={data}/>
        <LineChart data={data}/>
      </div>
    </div>
  );
}

export default App;