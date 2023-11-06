import "./Contact.css";
import Content from "../../Components/Content/Content";

const Contact = () => {
  return (
    <Content>
      <div className="contact-container">
        <h1> CONTACT INFO </h1>
        <p>
          {" "}
          Kenneth Leombruno <br />
          Phone: (631) 365 - 4520 <br />
          Email: kennethleombruno@gmail.com <br />
          Address: Setauket, NY 11733
        </p>
      </div>
    </Content>
  );
};

export default Contact;
