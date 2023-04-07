import React, { useRef, useState } from "react";
import { useFetcher, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { addQuery, fetchData, removeQuery } from "../helper";

export const contactLoader = () => {
  return fetchData("queries");
};

export const contactAction = async ({ request }) => {
  const req = await request.formData();
  const { _action, ...values } = Object.fromEntries(req);
  if (_action === "addQuery") {
    addQuery({ email: values.email, query: values.query });
    toast.success("Query added successfully!");
  }
  if (_action === "deleteQuery") {
    console.log(values.btn);
    removeQuery(values.btn);
  }
  return null;
};

const Contact = () => {
  const queries = useLoaderData();
  const fetcher = useFetcher();
  const formRef = useRef();
  const FocusRef = useRef();

  return (
    <>
      <div className="form_outlook">
        <h1 className="form_heading">Contact</h1>
        <fetcher.Form method="post" className="form" ref={formRef}>
          <input type="hidden" name="_action" value="addQuery" />
          <div className="input_section">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              required
              autoComplete="off"
              ref={FocusRef}
            />
          </div>
          <div className="input_section">
            <label htmlFor="query">Query</label>
            <input type="text" name="query" required autoComplete="off" />
          </div>
          <button type="submit" className="btn--dark">
            Submit
          </button>
        </fetcher.Form>
      </div>
      <div className="queries_section">
        <h1>Previous Queries</h1>
        {queries && queries.length
          ? queries.map((query) => {
              return (
                <div key={query.id} className="card">
                  <p className="query">{query.query}</p>
                  <p className="date">{query.date}</p>
                  <fetcher.Form method="post">
                    <input type="hidden" name="_action" value="deleteQuery" />
                    <button
                      type="submit"
                      style={{ marginTop: "20px", fontSize: "15px" }}
                      className="btn--dark "
                      name="btn"
                      value={query.id}
                    >
                      Resolved
                    </button>
                  </fetcher.Form>
                </div>
              );
            })
          : ""}
      </div>
    </>
  );
};

export default Contact;
