import React, { useState, useEffect } from "react";
import samplePDF from "../../../assets/home/resume.pdf";
import { Document, Page } from "react-pdf";

const Resume = () => {
  const [numPages, SetNumberPage] = useState(null);
  const pageNumber = 1;
  const onDocumentLoadSuccess = ({ numPages }) => {
    SetNumberPage(numPages);
  };
  useEffect(() => {
    const res = samplePDF;
    console.log("res", res);
  }, []);
  console.log("samplePDF", samplePDF);
  return (
    <div>
      <a href={samplePDF} target="_blank">
        <p>Click to open PDF file in a new tab</p>
      </a>
      {/* <div>
        <Document file={samplePDF} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div> */}
    </div>
  );
};
export default Resume;