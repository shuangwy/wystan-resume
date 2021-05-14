import React, { useState } from "react";
import samplePDF from "../../../assets/home/resume.pdf";
import { Document, Page } from "react-pdf";
const Resume = () => {
  return (
    <div>
      <Document file={samplePDF}>
        <Page pageNumber={2} />
      </Document>
    </div>
  );
};
export default Resume;
