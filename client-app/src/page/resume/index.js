import React from 'react';
import style from './index.less';
import { Divider, List, Typography } from 'antd';
import {
    InfoCircleOutlined,
    PhoneOutlined,
    WechatOutlined,
    GithubOutlined,
} from '@ant-design/icons';
const { Link } = Typography;

import email from 'assets/img/svg/Email.svg';
import website from 'assets/img/svg/website.svg';
import education from 'assets/img/svg/education.svg';
import job from 'assets/img/svg/job-title.svg';

const data = [
    {
        title: '前端工程师',
        avatar: <img src={job} />,
    },
    {
        title: '王爽 | 男 | 深圳',
        avatar: <InfoCircleOutlined />,
    },
    {
        title: '河南农业大学 | 2017年6月',
        avatar: <img src={education} />,
    },
    {
        title: '13298325163',
        avatar: <PhoneOutlined />,
    },
    {
        title: '572644539@qq.com',
        avatar: <img src={email} />,
    },
    {
        title: <Link href='https://github.com/shuangwy'>shuangwy</Link>,
        avatar: <GithubOutlined />,
    },
    {
        title: <Link href='https://wyshuang.com/#/'> https://wyshuang.com </Link>,
        avatar: <img src={website} />,
    },
    {
        title: 'wystan_ws',
        avatar: <WechatOutlined />,
    },
];

const dataList = [
    // { timeSheet: '2019/9-2021/6', company: '文思海辉元辉科技(深圳)有限公司 、深圳名图信息技术有限公司' },
    // { timeSheet: '2018/3-2019/9', company: '深圳市华云信息技术有限公司' },
    // { timeSheet: '2017/3-2018/3', company: '上海海锐赢信息技术有限公司' },
]
const hkjcProject = [
    { title: 1, content: '技术栈涉及react hooks、redux、Table2、enzyme、mocha、webSocket' },
    { title: 2, content: '负责系统的用户权限、hot-key、铃声系统、任务系统的设计' },
    { title: 3, content: '足球、篮球、赛马等赛事的投注监控，赔率调整,投注限制等页面的开发及调整' },
    { title: 4, content: '不同类型赛事中bet ticker实时监控，及相应反馈' },
]
const Resume = (props) => {
    return (
        <div className={style._main}>
            <div className={style._part}>
                <div className={style.part_left}>
                    <div className={style._title}>
                        {' '}
                        基本信息
                    </div>
                    <Divider />
                    <List
                        itemLayout='horizontal'
                        dataSource={data}
                        renderItem={(item) => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={item.avatar}
                                    title={item.title}
                                />
                            </List.Item>
                        )}
                    />
                    <Divider />
                    <div className={style._title}>
                        {' '}
                        工作经历
                    </div>
                    <List
                        bordered
                        split={false}
                        dataSource={dataList}
                        renderItem={(item) => (
                            <List.Item>
                                <Typography.Text mark>
                                    {`[${item.timeSheet}]`}
                                </Typography.Text>
                                {' '}
                                |
                                {item.company}
                            </List.Item>
                        )}
                    />
                    <div className={style._title}>项目经历</div>
                    <List
                        header={<h3> 深圳香港马会 integration console system（全英开发)</h3>}
                        bordered
                        split={false}
                        dataSource={hkjcProject}
                        renderItem={(item) => (
                            <List.Item className={style._project_item}>
                                <Typography.Text > 
                                    {' '}
                                    {item.title}
                                    .&nbsp;
                                </Typography.Text> 
                                {item.content}
                            </List.Item>
                        )}
                    />
                </div>
                <div className={style.part_right}></div>
            </div>
            <div className={style._download}>
                <a href='./doc/resume-english.pdf' target='_blank'>
                    <p>
                        download
                    </p>
                </a>
            </div>
        </div>
    );
};
export default Resume;
