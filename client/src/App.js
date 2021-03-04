import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [state, setState] = useState("not connected to backend");

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/test");
      setState(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>{state.msg}</h1>
    </div>
  );
}

export default App;
