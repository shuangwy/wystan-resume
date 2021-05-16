import React from 'react';
import style from './index.less';
import { Divider, List } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

const data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];

const Resume = (props) => {
    console.log('props', props)
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
                                    avatar={<InfoCircleOutlined/>}
                                    title={<a href='https://ant.design'>
                                        {item.title}
                                    </a>}
                                    description='Ant Design, a design language for background applications, is refined by Ant UED Team'
                                />
                            </List.Item>
                        )}
                    />
                    ,
                </div>
                <div className={style.part_right}>
                    
                </div>
            </div>
            <div className={style._download}>
                <a href='./doc/resume.pdf' target='_blank'>
                    <p>download</p>
                </a>
            </div>
        </div>
    );
};
export default Resume;
