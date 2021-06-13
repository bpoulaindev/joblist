import React, { useState } from "react";
import JobsService from '../service/JobsService';
import { Link, Redirect } from "react-router-dom";

export default function NewJob() {
  const [job, setJob] = useState({
    title: '',
    publishDate: '',
    type: '',
    description: '',
    helmetImageLink: 'https://cdn.filestackcontent.com/JEtZuMsT46qY1PK6OUS5',
    details: {
      contract: 'permanent'
    }
  })
  const [redirect, setRedirect] = useState(false)

  const handleChange = (event, field) => {
    setJob((oldState) => {
      const newState = {...oldState};
      newState[field] = event.target.value
      return newState
    })
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const jobService = new JobsService();
    await jobService.pushJob(job);
    setRedirect(true);
  }
  if (redirect) {
    return <Redirect to='/'/>;
  }
  return (
    
    <div className="row">
      <div className="col-lg-8 mx-auto">
        <button type="button" className="btn btn-light">
          <Link to="/" style={{ textDecoration: 'none' }}>
          <i className="fas fa-arrow-left"></i> Revenir aux offres
          </Link>
        </button>
        <div className="card m-2">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label for="jobTitle" className="form-label">Titre du job</label>
                  <input type="text" className="form-control" id="jobTitle" 
                  placeholder="Développeur je suppose" onChange={(e) => handleChange(e, "title")}/>
                </div>
                <div className="mb-3">
                  <label for="jobDate" className="form-label">publishDate</label>
                  <input type="text" className="form-control" 
                  id="jobDate" onChange={(e) => handleChange(e, "publishDate")}/>
                </div>
                <div className="mb-3">
                  <label for="jobType" className="form-label">Type de contrat</label>
                  <input type="text" className="form-control" id="jobType" 
                  placeholder="CDI" onChange={(e) => handleChange(e, "type")}/>
                </div>
                <div className="mb-3">
                  <label for="jobDescr" className="form-label">Description du Job</label>
                  <input type="text" className="form-control" id="jobDescr" 
                  placeholder="Bla bla bla" onChange={(e) => handleChange(e, "description")}/>
                </div>
                <button type="submit" className="btn btn-primary">Envoyer</button>
              </form>
            </div>
          </div>
      </div>
      
    </div>
  );
}