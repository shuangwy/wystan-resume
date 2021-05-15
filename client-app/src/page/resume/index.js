import React, { useEffect } from 'react';
// import samplePDF from './../../../assets/home/resume.pdf';
// import { Page, Document } from 'react-pdf';
// import { Document } from "react-pdf/dist/entry.webpack";

const Resume = () => {
    useEffect(() => {}, []);
    return (
        <div>
            <a href='./resume.pdf' target='_blank'>
                <p>
                    Click to open PDF file in a new tab
                </p>
            </a>
            {/* <Document
                file={samplePDF}
                onLoadSuccess={onDocumentLoadSuccess}
                options={{
                     cMapPacked: true,
                }}
            >
                <Page pageNumber={pageNumber} width={600} />
            </Document> */}
        </div>
    );
};
export default Resume;
