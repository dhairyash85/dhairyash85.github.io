import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";

import Body from "./Components/Body";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import pr from "./Projects.json" 
const ProjectContext = createContext();
function App() {
  const [projects, setProjects] = useState();
  useEffect( () => {
    setProjects(pr.Projects)
    console.log(projects)
  }, []);

  return (
      <div
      >
        <Header />
        <Body projects={projects}/>
      </div>
  );
}

export default App;
