import React from "react";

const TrailerTitle = ({ original_title, overview }) => {
  return (
    <div className="position-absolute text-white p-4 z-1 w-50 bg-black bg-opacity-75 top-50">
      <h1>{original_title}</h1>
      <p>{overview}</p>
      <div className="d-flex">
        <button className="btn m-1 btn-light px-4">▶️ play</button>
        <button className="btn m-1 btn-secondary px-3">More Info</button>
      </div>
    </div>
  );
};

export default TrailerTitle;
