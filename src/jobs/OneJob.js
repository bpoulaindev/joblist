import React, { useState, useEffect } from "react";
import JobsService from '../service/JobsService';
import { Link, useParams } from "react-router-dom";

function DisplayJob({job}) {
  if(!job) {
    return (
      <div className="row">
        <h3>Chargement...</h3>
      </div>
    )
  }
  return (
    <div className="card m-2">
            <object data={job.helmetImageLink} type="image/png" className="card-img-top">
              <img src="/pc.jpg" className="card-img-top" alt="Pas de truc à charger"/>
            </object>
            <div className="card-body">
              <h5 className="card-title">{job.title}</h5>
              <small>Publié le : {new Date(job.publishDate).toLocaleDateString("en-US")}</small>
              <br/>
              <small>Type de contrat : {job.details.contract}</small>
              <p className="force-text-left p-4">{job.description}</p>
            </div>
          </div>
  )
}

export default function OneJob() {
  const [job, setJob] = useState(undefined)
  const { jobId } = useParams();
  useEffect(() => {
    async function GetJob() {
      const jobService = new JobsService();
      const data = await jobService.getOneJob(jobId);
      const data2 = data.data();
      setJob(data2)
    }
    GetJob();
  },[jobId])

  return (
    <div className="row">
      <div className="col-lg-8 mx-auto">
        <button type="button" className="btn btn-light">
          <Link to="/" style={{ textDecoration: 'none' }}>
          <i className="fas fa-arrow-left"></i> Revenir aux offres
          </Link>
        </button>
        <DisplayJob job={job} />
      </div>
      
    </div>
  );
}