import React from "react";

const TabSection = () => {
  const tabs = [
    {
      tabName: "   MUSIC",
    },
    {
      tabName: "     ACTING",
    },
    {
      tabName: "     MODEL",
    },
    {
      tabName: "   FASHION",
    },
    {
      tabName: "      DESIGN",
    },
    {
      tabName: "     SPORTS",
    },
    {
      tabName: "    BUSINESS",
    },
    {
      tabName: "     PERFORMANCE",
    },
  ];
  return (
    <div className="container d-flex flex-wrap justify-content-between my-5">
      {tabs.slice(0, 1).map((tab, index) => (
        <button
          key={index}
          type="button"
          class="btn btn-dark rounded-pill px-3 fw-bold"
        >
          {tab.tabName}
        </button>
      ))}
      {tabs.slice(1, 8).map((tab, index) => (
        <button
          key={index}
          type="button"
          class="btn btn-outline-dark rounded-pill px-3 fw-bold m-1"
        >
          {tab.tabName}
        </button>
      ))}
    </div>
  );
};

export default TabSection;
