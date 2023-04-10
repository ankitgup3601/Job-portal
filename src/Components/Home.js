/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { useLoaderData } from "react-router-dom";
import data from "../data/db.json";
import { Rating } from "@mui/material";
export const homeLoader = () => {
  const reviews = data.reviews;
  // console.log(reviews)
  return reviews;
};

const Home = () => {
  const reviews = useLoaderData() ?? [];
  console.log(reviews);
  return (
    <div className="_home">
      <h1>Welcome!</h1>
      <p>
        A job portal is an online platform that connects job seekers with
        potential employers. It serves as a virtual marketplace for job
        opportunities, allowing employers to advertise job openings and job
        seekers to apply for those positions. A good job portal offers a wide
        range of job opportunities across various industries, locations, and job
        types. It should also provide job seekers with tools to create their
        profiles, upload their resumes, and apply for jobs with ease.
        Additionally, it should offer employers with features to post jobs,
        manage applications, and screen candidates.
      </p>
      <p>
        Job portals are becoming increasingly popular because they offer a
        convenient and efficient way for job seekers to find employment and for
        employers to find suitable candidates. They provide a centralized
        location for job postings, eliminating the need for both parties to
        search multiple sources for job opportunities or potential candidates.
        Job portals also offer a range of features that make the job search and
        recruitment process more efficient. These include search filters that
        allow job seekers to narrow down their search by location, industry, job
        type, and salary range. Employers can use features like applicant
        tracking systems (ATS) to manage and review applications. In summary,
        job portals are a vital tool for both job seekers and employers in
        today's digital age. They provide a convenient and efficient platform
        for connecting job seekers with potential employers, making the job
        search and recruitment process more streamlined and effective.
      </p>

      <h1 style={{marginTop : "100px"}}>Reviews</h1>
      <div className="card" style={{ display: "flex", overflow :  "scroll" }}>
        {reviews.map((rev, index) => {
          return (
            <div className="review-card" key={index}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "15px" }}
              >
                <img
                  src={rev.picture_url}
                  width="60px"
                  height="60px"
                  style={{ borderRadius: "50%" }}
                />
                <div>
                  <p style={{ margin: "0px" }}>{rev.name}</p>
                  <Rating value={rev.rating} readOnly />
                </div>
              </div>
              <p>
                {rev.comment}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
