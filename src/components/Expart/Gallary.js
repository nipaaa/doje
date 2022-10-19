import React from 'react';
import girl from "../../assets/section/highlight1.png"

const Gallary = () => {
    const gallary = [
        {
            name:"Jenny",
            picture: girl,
            likes: "14.2k"
        },
        {
            name:"Jenny",
            picture: girl,
            likes: "14.2k"
        },
        {
            name:"Jenny",
            picture: girl,
            likes: "14.2k"
        },
        {
            name:"Jenny",
            picture: girl,
            likes: "14.2k"
        },
        {
            name:"Jenny",
            picture: girl,
            likes: "14.2k"
        },
        {
            name:"Jenny",
            picture: girl,
            likes: "14.2k"
        }
    ]
    return (
     <div className='container'>
           <div className='row my-5 g-4'>
            {
                gallary.map((pic,index)=>   <div key={index} className="col-lg-2 ">
                <div class="card border-0 text-bg-dark">
                  <img src={pic.picture} class="card-img" alt="..." />
                  <div class="card-img-overlay ">
                    <h5 class="card-title fw-bolder pt-2">{pic.name}</h5>
                    <p class="card-text fw-bolder">{pic.likes}</p>
                  </div>
                </div>
              </div>)
            }
        </div>
     </div>
    );
};

export default Gallary;