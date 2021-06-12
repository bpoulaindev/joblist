import React, { Component, useState, useEffect } from "react";
import JobsService from '../service/JobsService';
import { Link } from "react-router-dom";

export default function OneJob() {
  const [jobs, setJobs] = useState([])
  useEffect(() => {
    async function test() {
      const jobService = new JobsService();
      const data = await jobService.getOneJob()
      setJobs(data)
    }
    test();
  },[])

  return (
    <div className="row">
        <h1>Test {jobs.description}</h1>
    </div>
  );
}