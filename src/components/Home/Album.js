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
        {albums.map((album, index) => (
          <div key={index} className="col-4 my-3">
            <div class="card text-bg-dark">
              <img src={album.picture} class="card-img" alt="..." />
              <div class="card-img-overlay ">
              <button type="button" class="btn btn-sm btn-outline-light rounded-pill me-3">{album.btn1}</button>
              <button type="button" class="btn btn-sm btn-outline-light rounded-pill">{album.btn2}</button>
                <h5 class="card-title fw-bolder pt-2">{album.title}</h5>
                <p class="card-text fw-bolder">
                 {album.description}
                </p>
              
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Album;
