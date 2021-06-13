import React, { Component, useState, useEffect } from "react";
import JobsService from '../service/JobsService';
import { Link, useParams } from "react-router-dom";

export default function OneJob() {
  const [jobs, setJob] = useState([])
  const { jobId } = useParams();
  useEffect(() => {
    async function GetJob() {
      const jobService = new JobsService();
      const dataArray = [];
      const data = await jobService.getOneJob(jobId);
      const data2 = data.data();
      dataArray.push(data2)
      setJob(dataArray)
    }
    GetJob();
  },[])

  return (
    <div className="row">
      <div class="col-lg-8 mx-auto">
        <button type="button" className="btn btn-light">
          <Link to="/" style={{ textDecoration: 'none' }}>
          <i class="fas fa-arrow-left"></i> Revenir aux offres
          </Link>
        </button>
        {jobs.map((job) => (
          <div className="card m-2">
            <object data={job.obj.helmetImageLink} type="image/png" className="card-img-top">
              <img src="/pc.jpg" className="card-img-top" alt="Pas de truc à charger"/>
            </object>
            <div className="card-body">
              <h5 className="card-title">{job.obj.title}</h5>
              <small>Publié le : {new Date(job.obj.publishDate).toLocaleDateString("en-US")}</small>
              <br/>
              <small>Type de contrat : {job.obj.details.contract}</small>
              <p className="force-text-left p-4">{job.obj.description}</p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}