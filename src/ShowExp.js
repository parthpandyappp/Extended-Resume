import React, { Component } from 'react';
import { FaAngleDoubleRight } from "react-icons/fa";

// function ShowExp(){
//         return (
//                 <h1>Hello</h1>
//         )
// }

const ShowExp = ({ expDat }) => {
        return (
                <>
                        {expDat.map((item) => {
                                const { id, pos, org, eve } = item;
                                return (
                                        <article key={id}>
                                                <div className="container">
                                                        <div className="mt-3 card">
                                                                <div className="card-header bold" style={{ fontSize: "larger" }}>
                                                                        <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                                                                        <p className="d-inline" style={{ fontStyle: "italic", color: "#93C5FD" }}>{pos} </p> @ <p className="d-inline" style={{ color: "#93C5FD" }}>{org}</p>
                                                                </div>
                                                                <div>
                                                                        {/* <h1>{expData.forEach(d=><li>Pandya</li>)}</h1> */}
                                                                </div>

                                                                <div className="card-body">
                                                                        <blockquote className="blockquote mb-0">
                                                                                <p className="space" style={{ fontSize: "small" }}>

                                                                                </p>
                                                                                <footer className="blockquote-footer">
                                                                                        <cite title="Source Title" style={{ fontSize: "small" }}>FEB 2021 - PRESENT</cite>
                                                                                </footer>
                                                                        </blockquote>
                                                                </div>
                                                        </div>
                                                </div>
                                        </article>
                                );
                        }
                        )}
                </>
        )
}
export default ShowExp;
{/* <div className="container">
        <div className="card">
          <div className="card-header bold" style={{ fontSize: "larger" }}>
            <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
            <p className="d-inline" style={{fontStyle:"italic", color:"#93C5FD"}}>Student </p> @ <p className="d-inline" style={{color:"#93C5FD"}}>Mexili Winter of Code</p>
          </div>
          <div>
            <h1>{expData.forEach(d=><li>Pandya</li>)}</h1>
            </div>

          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p className="space" style={{ fontSize: "small"}}>
                Mexili, an open source organisation, started a month-long Winter
                of Code program where accepted students are free to choose the
                project which interests them the most to contribute.
              </p>
              <footer className="blockquote-footer">
                <cite title="Source Title" style={{fontSize:"small"}}>FEB 2021 - PRESENT</cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </div> */}