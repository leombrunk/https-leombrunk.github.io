import "./NoPage.css";
import Content from "../../Components/Content/Content";

const NoPage = () => {
  return (
    <Content>
      <div className="nopage-container">
        <h1> 404 </h1>
        <p>Page not found.</p>
      </div>
    </Content>
  );
};

export default NoPage;
