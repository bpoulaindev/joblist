import React, { Component, useState, useEffect } from "react";
import JobsService from '../service/JobsService';

export default function WeshAlors() {
  const [jobs, setJobs] = useState([])
  useEffect(() => {
    async function test() {
      const jobService = new JobsService();
      console.log('wesh')
      const data = await jobService.getAllJobs()
      const data2 = []
      data.forEach(doc => {data2.push([doc.data(), doc.id])})
      setJobs(data2)
    }
    test();
  },[])

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 mt-2">
        {jobs.map(([el, id]) => (
          <div className="col" key={id}>
            <div className="card h-100">
            <object data={el.obj.helmetImageLink} type="image/png" className="card-img-top">
              <img src="/pc.jpg" className="card-img-top" alt="Pas de truc à charger"/>
            </object>
              <div className="card-body">
                <h5 className="card-title">{el.obj.title}</h5>
              </div>
              <small>Publié le : {new Date(el.obj.publishDate).toLocaleDateString("en-US")}</small>
              <small>Type de contrat : {el.obj.details.contract}</small>
              <div className="row mt-2">
                <div className=" col-lg-6 mx-auto">
                <button className="btn btn-primary">Voir l'offre</button>
              </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}