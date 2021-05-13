import React, { useState } from "react";
import style from "./index.less";
import { Layout, Drawer, List, Avatar } from "antd";
const { Header, Footer, Content } = Layout;
import { MenuOutlined } from "@ant-design/icons";
import Avator from "../../../assets/home/avator.jpg";
import Tree from "../../../assets/home/tree.jpeg";
import { Link } from "react-router-dom";
const data = [
  {
    title: "Ant Design Title 1",
    profile: Avator,
    title: <Link to="/login">Login In</Link>,
  },
  {
    title: "resume",
    profile: Tree,
  },
  {
    title: "简历",
    profile: Avator,
  },
];
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
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => {
            console.log("item", item);
            return (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={item.profile} />}
                  title={item.title}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
              </List.Item>
            );
          }}
        />
      </Drawer>
    </div>
  );
};
export default Home;
