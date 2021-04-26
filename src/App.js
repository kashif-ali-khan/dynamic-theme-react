import logo from "./logo.svg";
import { useState, useEffect } from "react";

import AntUploader from "./AntUploader";
import Login from "./Login";
import Users from "./Users";
import Userform from "./Userform";
import Register from "./Register";

import "antd/dist/antd.css";

import "./App.css";
import { Layout, Menu, Breadcrumb } from "antd";

import { Switch, Route, Link } from "react-router-dom";

function App() {
  const { Header, Content, Footer } = Layout;
  const [date, setDate] = useState(null);
  const handleChange = (value) => {
    setDate(value);
  };

  return (
    <>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Link to="/">Uploader</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/users">Users</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/login">Login</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/form">Form</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="/register">Register</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Uploader</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            <Switch>
              <Route path="/form">
                <Userform />
              </Route>
              <Route path="/users">
                <Users />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/">
                <AntUploader />
              </Route>
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>

      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        {/* <Switch>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Users />
          </Route>
        </Switch> */}
      </div>
      {/* <div>
        <p className="title">React Drag and Drop Image Upload</p>
        <DatePicker onChange={value => handleChange(value)} />
        <Tooltip title="search">
          <Button shape="round" icon={<SearchOutlined /> }  type="primary">Button</Button>
        </Tooltip>
        <div style={{ marginTop: 20 }}>
          <Alert type="success" showIcon closable message="Selected Date" description={date ? date.format('YYYY-MM-DD') : 'None'} />
        </div>
        <div className="content">
          <Dropzone />
        </div>
      </div> */}
      {/* <StyleLoader stylesheetPath={stylePath.themePath+stylePath.themeName+".css"} /> */}
      {/* <div className="App">
        <div className="header">I am header</div>
        <div className="logo">I am logo</div>
        <div>
          <p className="title">React Drag and Drop Image Upload</p>
          <div className="content">
            <Dropzone />
          </div>
        </div>
        <AudioRecorder />

        {/* <Uploader /> 
      </div> */}
    </>
  );
}

export default App;
