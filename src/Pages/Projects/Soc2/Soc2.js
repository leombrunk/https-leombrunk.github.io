import "../Projects.css";
import Content from "../../../Components/Content/Content";

const Soc2 = () => {
  return (
    <Content>
      <div className="project-guide">
        <h1>Soc 2 Audits</h1>
        <h2>Summary</h2>
        <p>
          A SOC 2 audit, or System and Organization Controls 2 audit, is an
          assessment of an organization's controls related to security,
          availability, processing integrity, confidentiality, and privacy of
          customer data.
          <ol>
            <li>Security</li>
            <ul>
              <li>Firewalls?</li>
              <li>2fa?</li>
              <li>Policies?</li>
              <li>Training?</li>
            </ul>
            <li>Privacy</li>
            <ul>
              <li>Sensitive data storage?</li>
              <li>Legality?</li>
              <li>Policies?</li>
            </ul>
            <li>Confidentiality</li>
            <ul>
              <li>Private data shared properly?</li>
              <li>Process to identify private data?</li>
              <li>Process to destroy private data?</li>
            </ul>
            <li>Process Integrity</li>
            <ul>
              <li>Records of system inputs and outputs?</li>
              <li>Process to detect and correct errors?</li>
              <li>Process to ensure product meets spec?</li>
            </ul>
            <li>Availability</li>
            <ul>
              <li>Predict system capacity?</li>
              <li>Identify backup data</li>
              <li>Mitigate environmental disasters</li>
              <li>Recovery plan for disaster?</li>
            </ul>
          </ol>
        </p>
        <p>Be prepared to provide:</p>
        <ul>
          <li>Proof of sharing best practices with engineers</li>
          <li>Proof of ticket review process</li>
          <li>Proof of workstation compliance/security</li>
        </ul>
      </div>
    </Content>
  );
};

export default Soc2;
