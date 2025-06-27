import React from 'react'
import "./resume.css";
import ResumePDF from "../../assets/resumeBiz.pdf";

const Resume = () => {
  return (
    <section className="resume container section" id="resume">
      <h2 className="section__title">Resume</h2>
      <iframe
        src={ResumePDF}
        title="Rand Hasan Resume"
        width="100%"
        height="800px"
        className="resume-frame"
      />
    </section>
  )
}

export default Resume