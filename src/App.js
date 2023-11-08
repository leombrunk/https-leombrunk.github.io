import "./App.css";
import { Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Resume from "./Pages/Resume/Resume";
import NoPage from "./Pages/NoPage/NoPage";
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import { ProjectList } from "./Services/ProjectList/ProjectList";

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects projects={ProjectList} />} />
        {ProjectList.map((project) => (
          <Route
            path={`projects/${project.page}`}
            element={project.component}
          />
        ))}
        <Route path="contact" element={<Contact />} />
        <Route path="resume" element={<Resume />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
