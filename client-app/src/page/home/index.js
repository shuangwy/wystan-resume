import React, { useState } from 'react';
import style from './index.less';
import { Layout, Drawer, List, Avatar } from 'antd';
const { Content } = Layout;
import { MenuOutlined } from '@ant-design/icons';
import Avator from 'assets/home/avator.jpg';
import Tree from 'assets/home/tree.jpeg';
import Login from 'assets/home/login.png';

import { Link } from 'react-router-dom';
const data = [
    {
        profile: Login,
        title: <Link to='/login'>Login In</Link>,
        description:
      'I believe every human has a finite number of heartbeats. I don\'t intend to waste any of mine. ',
    },
    {
        title: <Link to='/resume'>Resume</Link>,
        profile: Tree,
        description:
      'If you want to achieve something or intend to fulfill one of your ambitions, you must make efforts and prepared.Otherwise you will take no advantage of opportunities when come to visit you.',
    },
    {
        // title: <Link to='/layout-resume'>简历</Link>,
        title: <a href='./doc/presentation.pdf' target='_blank'>
            <p>presentation</p>
        </a>,
        profile: Avator,
        description: '暂未开放,看点别的吧',
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
                <div className={style.content_font}>生命不息，折腾不止</div>
            </Content>
            <Drawer
                placement='left'
                closable={false}
                onClose={() => setSiderShow(!sideShow)}
                visible={sideShow}
                key='left'
                className={style.drawer}
            >
                <List
                    itemLayout='horizontal'
                    dataSource={data}
                    renderItem={(item) => {
                        return (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar src={item.profile} />}
                                    title={item.title}
                                    description={item.description}
                                />
                            </List.Item>
                        )
                    }}
                />
            </Drawer>
        </div>
    );
};
export default Home;
