import React from "react";
import { Layout, Menu } from "antd";
import { MailOutlined, AppstoreOutlined, SettingOutlined } from "@ant-design/icons";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router";
import routes from "../../router";
import Breadcrumb from "./breadcrumb";
import "./index.less";

const { Header, Content, Footer } = Layout;

const Index = (props: any) => {
  const { push } = useHistory();

  const handleMenuClick = ({ keyPath }: any) => {
    push(keyPath[0]);
  };

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu  theme="dark" mode="horizontal" defaultSelectedKeys={["/"]}>
          {routes.map((item, index) => {
            return (
              <Menu.Item key={item.path}>
                <Link to={item.path} />
                {item.name}
              </Menu.Item>
            );
          })}
        </Menu>
      </Header>
      <Breadcrumb />

      <Content style={{ padding: "0 50px" }}>
        <Switch>
          {routes.map((route) => (
            <Route exact key={route.path} path={route.path}>
              <div className="site-layout-content">
                <route.component />
              </div>
            </Route>
          ))}
        </Switch>
      </Content>
      <Footer style={{ textAlign: "center" }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
};
export default Index;
