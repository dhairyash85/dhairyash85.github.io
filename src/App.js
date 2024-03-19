import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
// import image from "./Static/asfalt-dark.png";

import Body from "./Components/Body";
// const axios=require('axios')
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import pr from "./Projects.json" 
// import mongo from './Backend/DB'
const ProjectContext = createContext();
function App() {
  // mongo()
  const [projects, setProjects] = useState();
  useEffect( () => {
    setProjects(pr.Projects)
    console.log(projects)
  }, []);

  return (
      <div
        style={{ backgroundImage: `url(${"https://www.transparenttextures.com/patterns/asfalt-light.png"})`, backgroundColor: "#3b3b3b" }}
      >
        <Header />
        <Body projects={projects}/>
      </div>
  );
}

export default App;
// mongodb://dhairyash:dhairyash@ac-nielw8j-shard-00-00.mxcdeo3.mongodb.net:27017,ac-nielw8j-shard-00-01.mxcdeo3.mongodb.net:27017,ac-nielw8j-shard-00-02.mxcdeo3.mongodb.net:27017/?ssl=true&replicaSet=atlas-1lobk4-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Portfolio
