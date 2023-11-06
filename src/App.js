import "./App.css";
import { Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Resume from "./Pages/Resume/Resume";
import NoPage from "./Pages/NoPage/NoPage";
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import Website from "./Pages/Projects/Website/Website";
import Selenium from "./Pages/Projects/Selenium/Selenium";

function App() {
  const projects = [
    {
      page: "selenium",
      title: "Scraping Web Data With Python And Selenium",
      img: "https://drive.google.com/uc?id=1Io3xaBnHMBrnMB9p_Lik3HkRenjuRTAO",
      description: "Use selenium and python to scrape data about phone usage.",
      component: <Selenium />,
    },
    {
      page: "website",
      title: "Building A Static Website With Github",
      img: "https://drive.google.com/uc?id=1rxWNrfg_zzVIJfEjGOUMbGs47zcY9LRw",
      description: `Use Github pages to create your own website.
        Learn some basics behind using Git as well as writing HTML and CSS.`,
      component: <Website />,
    },
  ];
  return (
    <div className="app-container">
      <NavBar />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects projects={projects} />} />
        {projects.map((project) => (
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
