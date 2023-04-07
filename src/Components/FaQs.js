import React from 'react'
import { useLoaderData } from 'react-router-dom'
import data from '../data/db.json'
export const FaqLoader = () =>{
    const Questions = data.Questions

    return {Questions};
}
const FaQs = () => {
    const {Questions} = useLoaderData();
  return (
    <div>
        <h2>Frequently Asked Questions</h2>
        {
            Questions.map((question)=>{
                return <div key={question.id} className="card">
                    <p>Q:{" "+question.question}</p>
                    <p>A:{" "+question.Answer}</p>
                </div>
            })
        }
    </div>
  )
}

export default FaQs