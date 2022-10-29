import React from "react";
import class1 from "../../assets/section/class1.png";
import class2 from "../../assets/section/class2.png";

const Album = () => {
  const albums = [
    {
      picture: class1,
      btn1: "ORIGINAL SOUND",
      btn2: "BEAT & HOOK",
      title: "SONGHEE’S MUSIC CLASS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
    },
    {
      picture: class1,
      btn1: "ORIGINAL SOUND",
      btn2: "BEAT & HOOK",
      title: "SONGHEE’S MUSIC CLASS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
    },
    {
      picture: class1,
      btn1: "ORIGINAL SOUND",
      btn2: "BEAT & HOOK",
      title: "SONGHEE’S MUSIC CLASS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
    },
    {
      picture: class2,
      btn1: "ORIGINAL SOUND",
      btn2: "BEAT & HOOK",
      title: "SONGHEE’S MUSIC CLASS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
    },
    {
      picture: class2,
      btn1: "ORIGINAL SOUND",
      btn2: "BEAT & HOOK",
      title: "SONGHEE’S MUSIC CLASS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
    },
    {
      picture: class2,
      btn1: "ORIGINAL SOUND",
      btn2: "BEAT & HOOK",
      title: "SONGHEE’S MUSIC CLASS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
    },
    {
      picture: class2,
      btn1: "ORIGINAL SOUND",
      btn2: "BEAT & HOOK",
      title: "SONGHEE’S MUSIC CLASS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
    },
    {
      picture: class2,
      btn1: "ORIGINAL SOUND",
      btn2: "BEAT & HOOK",
      title: "SONGHEE’S MUSIC CLASS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
    },
  ];
  return (
    <div className="container">
      <div className="row">
        {albums.slice(0, 3).map((album, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12 my-3">
            <div class="card text-bg-dark">
              <img src={album.picture} class="card-img" alt="..." />
              <div class="card-img-overlay d-flex flex-column justify-content-end">
                <div className="d-flex flex-column justify-content-end">
                  <div></div>
                  <div></div>
                  <div>
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-light rounded-pill  me-3"
                    >
                      {album.btn1}
                    </button>
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-light rounded-pill"
                    >
                      {album.btn2}
                    </button>
                    <h5 class="card-title fw-bolder pt-2">{album.title}</h5>
                    <p class="card-text fw-bolder">{album.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex flex-lg-row  flex-column justify-content-between gap-1">
        {albums.slice(3, 8).map((album, index) => (
          <div key={index} className="">
            <div class="card">
              <img src={album.picture} class="card-img-top" alt="..." />
              <div class="card-body">
                <button
                  type="button"
                  style={{ fontSize: "8px" }}
                  class="btn btn-sm btn-outline-dark rounded-pill fw-bold me-3"
                >
                  {album.btn1}
                </button>
                <button
                  type="button"
                  style={{ fontSize: "8px" }}
                  class="btn btn-sm btn-outline-dark rounded-pill fw-bold"
                >
                  {album.btn2}
                </button>
                <h5
                  style={{ fontSize: "14px" }}
                  class="card-title fw-bolder pt-3"
                >
                  {album.title}
                </h5>
                <p class="card-text">{album.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Album;
