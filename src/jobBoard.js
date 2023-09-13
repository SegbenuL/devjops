// src/JobBoard.js
import React from "react";
import Job from "./components/job.js";
import data from "./data/data.json"; // Import the job data
import "./App.css";

const JobBoard = () => {
  return (
    <div className="job-board">
      {data.map((job) => (
        <Job key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobBoard;
