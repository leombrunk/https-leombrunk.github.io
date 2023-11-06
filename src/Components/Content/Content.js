import "./Content.css";
import Footer from "../Footer/Footer";

const Content = (props) => {
  return (
    <div className="content-container">
      <div className="content-padding" />
      <div className="content">
        <div className="content-inner-container">
          <div className="content-inner-padding" />
          <div className="content-inner">{props.children}</div>
          <div className="content-inner-padding" />
        </div>
        <Footer />
      </div>
      <div className="content-padding" />
    </div>
  );
};

export default Content;
