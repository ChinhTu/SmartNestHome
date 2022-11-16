import React, { useEffect, useState } from "react";
import "./App.css";
import { Col, Row, Tabs, Switch } from "antd";
import logo from "./images/image002.png";
import logo1 from "./images/logokhoa.png";
import { AlertFilled } from "@ant-design/icons";
import { ref, child, get } from "firebase/database";
import { database } from "./firebaseConfig";

const App = () => {
  const [value, setValue] = useState({});
  const dbRef = ref(database);
  const fetchData = async () => {
    await get(child(dbRef, `DATN`))
      .then((snapshot) => {
        const response = snapshot.val();
        if (snapshot.exists()) {
          setValue(response);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <div className="container">
      <div className="header-wrapper">
        <Row className="header">
          <Col span={6} className="title-wrapper">
            <div className="school-logo-wrapper">
              <img src={logo} className="school-logo" alt="Logo DUT"></img>
            </div>
          </Col>
          <Col span={12}>
            <div className="header-title">
              <p className="title-text">SMART SWIFTLET HOME SYSTEM</p>
            </div>
          </Col>
          <Col span={6} className="title-wrapper">
            <div className="school-logo-wrapper">
              <img src={logo1} className="faculty-logo" alt="Logo ETE"></img>
            </div>
          </Col>
        </Row>
      </div>
      <div className="content-wrapper">
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="General Info" key="1">
            <Row>
              <Col
                span={7}
                style={{
                  backgroundColor: "aqua",
                  height: "300px",
                  marginTop: "30px",
                  marginLeft: "25px",
                }}
              >
                <div className="temp-wrapper">
                  <div className="temp-title">
                    <span>TEMP</span>
                    <span style={{ marginLeft: "10px" }}>
                      <AlertFilled />
                    </span>
                  </div>
                  <p className="temp-value">{value.Nhiet_Do}&#8451;</p>
                </div>
              </Col>
              <Col span={1}></Col>
              <Col
                span={7}
                style={{
                  backgroundColor: "green",
                  height: "300px",
                  marginTop: "30px",
                }}
              >
                <div className="temp-wrapper">
                  <div className="temp-title">
                    <span>HUMIDITY</span>
                    <span style={{ marginLeft: "10px" }}></span>
                  </div>
                  <p className="temp-value">84%</p>
                </div>
              </Col>
              <Col span={1}></Col>
              <Col
                span={7}
                style={{
                  backgroundColor: "yellow",
                  height: "300px",
                  marginTop: "30px",
                }}
              >
                <div className="temp-wrapper">
                  <div className="temp-title">
                    <span>LIGHT CONDITION</span>
                    <span style={{ marginLeft: "10px" }}>
                      <AlertFilled />
                    </span>
                  </div>
                  <p className="temp-value">{value.CuongDoAnhSang} lux</p>
                </div>
              </Col>
            </Row>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Mode Settings" key="2">
            <div className="switch-wrapper">
              <Row>
                <Col span={1}></Col>
                <Col span={11}>
                  <Switch defaultChecked onChange={onChange} />
                  <span>Auto Mode</span>
                </Col>
                <Col span={11}></Col>
                <Col span={1}></Col>
              </Row>
            </div>
            <div className="switch-wrapper">
              <Row>
                <Col span={1}></Col>
                <Col span={11}>
                  <Switch defaultChecked onChange={onChange} />
                  <span>Auto Mode</span>
                </Col>
                <Col span={11}>
                  <Switch defaultChecked onChange={onChange} />
                </Col>
                <Col span={1}></Col>
              </Row>
            </div>
            <div className="switch-wrapper">
              <Row>
                <Col span={1}></Col>
                <Col span={11}>
                  <Switch defaultChecked onChange={onChange} />
                  <span>Auto Mode</span>
                </Col>
                <Col span={11}>
                  <Switch defaultChecked onChange={onChange} />
                </Col>
                <Col span={1}></Col>
              </Row>
            </div>
            <div className="switch-wrapper">
              <Row>
                <Col span={1}></Col>
                <Col span={11}>
                  <Switch defaultChecked onChange={onChange} />
                  <span>Auto Mode</span>
                </Col>
                <Col span={11}>
                  <Switch defaultChecked onChange={onChange} />
                </Col>
                <Col span={1}></Col>
              </Row>
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Alarm Settings" key="3">
            Content of Tab Pane 3
          </Tabs.TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default App;
