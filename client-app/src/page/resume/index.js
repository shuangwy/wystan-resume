import React from 'react';
import style from './index.less'
const Resume = () => {
    return (<div className={style._main}>
        <div className={style._part}>
            123
        </div>
        <div>
            <a href='./doc/resume.pdf' target='_blank'>
                <p>  Click to open PDF file in a new tab </p>
            </a>
        </div>
    </div>
    );
};
export default Resume;
