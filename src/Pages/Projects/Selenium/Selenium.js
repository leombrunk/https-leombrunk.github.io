import "../Projects.css";
import Content from "../../../Components/Content/Content";

const Selenium = () => {
  return (
    <Content>
      <div className="project-guide">
        <h1>Scraping Web Data With Python And Selenium</h1>
        <h2>What Is Selenium And Web Scraping?</h2>
        <p>
          Web scraping is the extraction of data from websites. Selenium is a
          tool that allows for the automated scraping of data from websites. The
          Selenium IDE can make it easy to record and playback test scripts,
          however for this project we will just use Selenium Webdriver with
          Python.
        </p>
        <img
          src="https://drive.google.com/uc?id=1JJU030fFLJEmmT_UT3dEFTpDZI7Y3lCv"
          alt="ting-messages"
        />
        <h2>Using Selenium To Answer Real World Questions</h2>
        <p>
          Selenium can be used for a variety of purposes. For me in this project
          I used selenium to help my family with our phone bill. For our phone
          plan we use Ting, a pay as you go mobile virtual network operator
          (MVNO). Being that it is pay as you go, it's important to know how
          much talk, text, and data you use each month on your phone so you know
          what to expect on your phone bill. This information can also be useful
          when trying to decide on alternative phone plans. Ting saves all of
          this information for each month's phone bill, but does not make it
          easy to get to. For example, Ting does not list the total number of
          texts one particular phone used that month. Instead it creates a large
          list of every text sent as seen in the photo. So you could either
          tediously count every text for every user for every month of phone
          bills, or you can use Selenium as I did
          <a
            href="https://github.com/leombrunk/TingDataScraper"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            here
          </a>{" "}
          to collect the data and neatly format it into a CSV file.
        </p>
        <h2>Results</h2>
        <p>
          Using the python script I made I got a nice CSV file to work with in
          Google Sheets. There was a lot of cool things I learned while
          analyzing the data like how much quarantine decreased everyone's data
          usage, or how our median cost differs from our average cost because of
          spikes in data usage from when people disconnect from wifi without
          realizing. The resulting charts can be seen below.
        </p>
        <img
          src="https://drive.google.com/uc?id=15XC2WMPTSEF725JftZJjwgWzHDsTOb-v"
          alt="talk-chart"
        />
        <img
          src="https://drive.google.com/uc?id=1aWghfrxItj072pxb4Jcn93fdkY0Dq3fp"
          alt="text-chart"
        />
        <img
          src="https://drive.google.com/uc?id=15-RxhaF4hXPSMMM0C_vq6trOWJdK2KOv"
          alt="data-chart"
        />
        <img
          src="https://drive.google.com/uc?id=1vwdOVRg95SN7964o7NvMVA2mcnXMxZcb"
          alt="total-chart"
        />
      </div>
    </Content>
  );
};

export default Selenium;
