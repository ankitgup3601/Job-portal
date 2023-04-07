import React, { useEffect } from "react";
import {useNavigate } from "react-router-dom";
import data from '../data/db.json'
const Careers = () => {
  const {careers} = data;
  const navigate = useNavigate();
  return (
    <div>
      <h1>Careers</h1>
      <p>
        Join our team and discover exciting career opportunities at our
        organization. We value innovation, collaboration, and diversity in a
        supportive and inclusive work environment.
      </p>
      {
        careers.map((job)=>{
            return <div key={job.id} className = "card" style={{cursor : "pointer"}} onClick={()=>
                navigate(`/careers/${job.id}`)}>
                <p className="job_title">{job.title}</p>
                <p className="job_location">{job.location}</p>
            </div> 
        })
      }
    </div>
  );
};

export default Careers;
