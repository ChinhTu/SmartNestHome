import "./App.css";
import { Col, Row } from "antd";
import logo from "./images/image002.png";
import logo1 from "./images/logokhoa.png";

const App = () => {
  return (
    <div className="container">
      <div className="header-wrapper">
        <Row className="header">
          <Col span={8} className="title-wrapper">
            <div className="school-logo-wrapper">
              <img src={logo} className="school-logo" alt="Logo DUT"></img>
              <img src={logo1} className="faculty-logo" alt="Logo ETE"></img>
            </div>
            <div className="header-title">
              <p className="title-text">SMART SWIFTLET HOME SYSTEM</p>
            </div>
          </Col>
          <Col span={16}>2</Col>
        </Row>
      </div>
    </div>
  );
};

export default App;
