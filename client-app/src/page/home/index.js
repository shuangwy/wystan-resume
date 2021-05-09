import React, { useState } from "react";
import style from "./index.less";
import { Layout, Drawer } from "antd";
const { Header, Footer, Content } = Layout;
import { MenuOutlined } from "@ant-design/icons";
const Home = () => {
  const [sideShow, setSiderShow] = useState(false);
  return (
    <div className={style.home_base}>
      <div className={style.menu}>
        <MenuOutlined onClick={() => setSiderShow(!sideShow)} />
      </div>
      <Content>
        <div className={style.content_font}>生命不息，奋斗不止</div>
      </Content>
      <Drawer
        placement="left"
        closable={false}
        onClose={() => setSiderShow(!sideShow)}
        visible={sideShow}
        key="left"
        closable
        className={style.drawer}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
};
export default Home;
