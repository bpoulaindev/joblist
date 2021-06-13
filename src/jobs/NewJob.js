import React, { Component, useState, useEffect } from "react";
import JobsService from '../service/JobsService';
import { Link, useParams } from "react-router-dom";

export default function NewJob() {
  return (
    <div className="row">
      <div class="col-lg-8 mx-auto">
        <button type="button" className="btn btn-light">
          <Link to="/" style={{ textDecoration: 'none' }}>
          <i class="fas fa-arrow-left"></i> Revenir aux offres
          </Link>
        </button>
        <div className="card m-2">
            <div className="card-body">
              <div className="mb-3">
                <label for="jobTitle" className="form-label">Titre du job</label>
                <input type="text" class="form-control" id="jobTitle" placeholder="Développeur je suppose"/>
              </div>
              <div className="mb-3">
                <label for="jobDate" className="form-label">timestamp</label>
                <input type="text" class="form-control" id="jobDate"/>
              </div>
              <div className="mb-3">
                <label for="jobType" className="form-label">Type de contrat</label>
                <input type="text" class="form-control" id="jobType" placeholder="CDI"/>
              </div>
              <div className="mb-3">
                <label for="jobDescr" className="form-label">Description du Job</label>
                <input type="text" class="form-control" id="jobDescr" placeholder="Bla bla bla"/>
              </div>
            </div>
          </div>
      </div>
      
    </div>
  );
}