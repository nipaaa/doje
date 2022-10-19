import React from "react";

const TabSection = () => {
  return (
    <div className="container d-flex flex-wrap justify-content-between my-5">
      <button type="button" class="btn btn-dark rounded-pill px-3 fw-bold">
        MUSIC
      </button>
      <button type="button" class="btn btn-outline-dark rounded-pill px-3 fw-bold m-1">
        ACTING
      </button>
      <button type="button" class="btn btn-outline-dark rounded-pill px-3 fw-bold m-1">
        MODEL
      </button>
      <button type="button" class="btn btn-outline-dark rounded-pill px-3 fw-bold m-1">
        FASHION
      </button>
      <button type="button" class="btn btn-outline-dark rounded-pill px-3 fw-bold m-1">
        DESIGN
      </button>
      <button type="button" class="btn btn-outline-dark rounded-pill px-3 fw-bold m-1">
        SPORTS
      </button>
      <button type="button" class="btn btn-outline-dark rounded-pill px-3 fw-bold m-1">
        BUSINESS
      </button>
      <button type="button" class="btn btn-outline-dark rounded-pill px-3 fw-bold m-1">
        PERFORMANCE
      </button>
    </div>
  );
};

export default TabSection;
