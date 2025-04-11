import NavScrollExample from "../components/Nav1";
import './Home.css'
import BasicExample1 from "../components/Dropdown";
import BasicExample2 from "../components/Card";
import { useState } from "react";
import axios from "axios";
function Home(){
    let[data1,setData1]=useState([]);
    async function fetchUser() {
        let url="https://omdbapi.com/?apikey=4e9e8ed7&s=series";
        const userResult=await axios.get(url)
        
    }
    return(

    );
}