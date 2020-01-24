import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";

// https://api.nasa.gov/planetary/apod?api_key=erTW5M9qngVOSe2b65T5b9VCOFpVtCw3CoCEeX2N
function App() {
  const [data, setData] = useState([]);
    useEffect(() => {
      axios.get("https://api.nasa.gov/planetary/apod?api_key=erTW5M9qngVOSe2b65T5b9VCOFpVtCw3CoCEeX2N")
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(error => {
        console.log("the data was not returned", error)
      })
    },[])
  return (
    <div className="App">
      <Header headerData={data}/>
      <Body bodyData={data}/>
      <Footer footerData={data}/>
    </div>
  );
}



export default App;

