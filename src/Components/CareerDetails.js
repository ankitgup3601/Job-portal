import React from 'react'
import { useLoaderData } from 'react-router-dom';
import data from '../data/db.json'
export const careerPageLoader =  ({params}) =>{
    const {id} = params;
    const jobDetail = data.careers.find((job)=> job.id == id) ?? {}
    return {jobDetail}
}
export const CareerDetails = () => {
    const {jobDetail} = useLoaderData();
  return (
    <div className='card'>
        <h3>Career Details for{" "}{jobDetail.title}</h3>
        <p>Starting salary:{" "}{jobDetail.salary}/- </p>
        <p>Location:{" "}{jobDetail.location}</p>
        <p>{jobDetail.description}</p>
    </div>
  )
}
