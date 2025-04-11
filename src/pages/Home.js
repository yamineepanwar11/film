import NavScrollExample from "../components/Nav1";
import './Home.css'
import BasicExample1 from "../components/Dropdown";
import BasicExample2 from "../components/Card";
import { useEffect, useState } from "react";
import axios from "axios";

function HOME() {
  let [data1, setData1] = useState([]);
  useEffect(() => {
    async function fetchUser() {
      let url = 'https://omdbapi.com/?apikey=4e9e8ed7&s=series';
      const userResult = await axios.get(url);
      console.log(userResult, "<=======result");
      setData1(userResult.data.Search);
    }
    fetchUser()
  }, []);
  console.log(data1, "<===d1")
  return (
    <div className="outer">
      <NavScrollExample />
      <div className="back" >
        <h1>Movies Related In 2025</h1>
        <h4><b>Select Year</b></h4>
        <BasicExample1 />
        <div className="card_cntr">
          {
            data1.map((movideData) => {
              return <BasicExample2 data={movideData} />
            })
          }
        </div>
      </div>
    </div>
  );
}
export default HOME;

