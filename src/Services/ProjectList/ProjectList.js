import Website from "../../Pages/Projects/Website/Website";
import Selenium from "../../Pages/Projects/Selenium/Selenium";
import Integration from "../../Pages/Projects/Integration/Integration";
import Soc2 from "../../Pages/Projects/Soc2/Soc2";
import Database from "../../Pages/Projects/Database/Database";

export const ProjectList = [
  {
    page: "integration",
    title: "Data integrations with 3rd parties",
    img: "https://drive.google.com/uc?id=1kK3tj7H1B3VhfPk00L5QaQJZ6CSC1dVP",
    description:
      "Designs and considerations when performing data integrations with 3rd parties.",
    component: <Integration />,
  },
  {
    page: "database",
    title: "Data storage considerations",
    img: "https://drive.google.com/uc?id=1Ti0gJvD1cICbyEyU99jKJeLEnTqjFbg-",
    description: "Designs and considerations when storing data.",
    component: <Database />,
  },
  {
    page: "soc2",
    title: "Soc 2 Audits",
    img: "https://drive.google.com/uc?id=1CH4zTxaw_Zsj5gmu034DHKEKouSCN4qJ",
    description: "Information about soc 2 audits.",
    component: <Soc2 />,
  },
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
