import "./styles.css";
import React, { useState } from "react";
import expData from "./Experience.js";
import ShowExp from "./ShowExp.js"

export default function App() {
  const [exp, setExp] = useState(expData);
  // const [con, setCon] = useState("Cocoa");
  // for(const item of expData){
  //   console.log(item)
  // }
  console.log(expData)
  // let temp= [];
  // temp = expData.map(data => {return data.org})
  return (
    <div className="container">
      <nav
        className="shadow-sm p-3 mb-5 rounded mt-3 text-center"
        style={{ backgroundColor: "#EFF6FF" }}
      >
        <span>
          <p
            style={{ fontWeight: "bold" }}
            className="bold btn btn-outline-secondary m-2"
            onClick={function setGenre() {
              setExp({genre: "Experience"});
            }}
          >
            EXPERIENCE
          </p>
          <p
            style={{ fontWeight: "bold" }}
            className="bold btn btn-outline-secondary m-2"
            onClick={function setGenre() {
              setExp({genre:"Skills"});
            }}
          >
            SKILLS
          </p>
          <p
            style={{ fontWeight: "bold" }}
            className="bold btn btn-outline-secondary m-2"
            onClick={function setGenre() {
              setExp("Projects");
            }}
          >
            PROJECTS
          </p>
          <p
            style={{ fontWeight: "bold" }}
            className="bold btn btn-outline-secondary m-2"
            onClick={function setGenre() {
              setExp("Co-Curricular");
            }}
          >
            CO-CURRICULAR
          </p>
        </span>
      </nav>
      <div className="title">
        <h2 style={{ fontWeight: "bolder" }}>{exp.genre}</h2>
        <div className="underline"></div>
      </div>
      <ShowExp expDat={exp}/>
      {/* <h1 className="bold text-center mx-auto">{cont}</h1> */}
      
    </div>
  );
}
