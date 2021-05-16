import React from 'react';
import style from './index.less';
import { Divider, List, Typography } from 'antd';
import { InfoCircleOutlined, PhoneOutlined, WechatOutlined, GithubOutlined } from '@ant-design/icons';
const { Link } = Typography;

import email from 'assets/img/svg/Email.svg'
import website from 'assets/img/svg/website.svg'
import education from 'assets/img/svg/education.svg'
import job from 'assets/img/svg/job-title.svg'

const data = [
    {
        title: '前端工程师',
        avatar: <img src={job}/>
    },
    {
        title: '王爽 | 男 | 深圳',
        avatar: <InfoCircleOutlined />
    },
    {
        title: '河南农业大学 | 2017年6月',
        avatar: <img src={education}/>
    },
    {
        title: '13298325163',
        avatar: <PhoneOutlined />

    },
    {
        title: '572644539@qq.com',
        avatar: <img src={email}/>
    },
    {
        title: <Link href='https://github.com/shuangwy'>shuangwy</Link>,
        avatar: <GithubOutlined />

    },
    {
        title: <Link href='https://wyshuang.com/#/'>https://wyshuang.com</Link>,
        avatar: <img src={website}/>

    },
    {
        title: 'wystan_ws',
        avatar: <WechatOutlined />

    },
   
];

const Resume = (props) => {
    return (
        <div className={style._main}>
            <div className={style._part}>
                <div className={style.part_left}>
                    <div className={style._title}> 基本信息</div>
                    <Divider/>
                    <List
                        itemLayout='horizontal'
                        dataSource={data}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={item.avatar}
                                    title={item.title}
                                />
                            </List.Item>
                        )}
                    />
                    <div className={style._title}> 工作经历</div>
                    <Divider/>
                    未完待续
                </div>
                <div className={style.part_right}>
                    
                </div>
            </div>
            <div className={style._download}>
                <a href='./doc/resume-english.pdf' target='_blank'>
                    <p>download</p>
                </a>
            </div>
        </div>
    );
};
export default Resume;
