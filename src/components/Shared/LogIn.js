import React from "react";
import google from "../../assets/icon/google.svg"

const LogIn = () => {
  return (
    <div className="footer">
      <div className="w-25 mx-auto pb-3">
        <div className="border-bottom border-dark">
        <input className="border-0 bg-transparent py-3 w-100" type="ID" placeholder="ID" />
        </div>
        <div className="border-bottom border-dark">
        <input className="border-0 bg-transparent py-3 w-100" type="password" placeholder="Password" />
        </div>
        <p className="text-end pt-3">비밀번호 찾기</p>
  
        <div class="d-grid my-5">
          <button
            class="btn btn-lg btn-outline-dark rounded-pill fw-bolder"
            type="button"
          >
            LOG IN
          </button>
        </div>
        <div class="d-grid my-2">
          <button
            class="btn btn-lg btn-dark rounded-pill fw-bolder"
            type="button"
          >
            CREATE ACCOUNT
          </button>
        </div>

        <div className="row my-2">
            <div className="col-lg-6 col-sm-12">
            <div class="d-flex align-items-center justify-content-center px-2">
          <button
            class="btn btn-lg btn-outline-dark rounded-pill fw-bolder"
            type="button"
          > <img className="me-2" src={google} alt="" />
       GOOGLE
          </button>
        </div>
            </div>
            <div className="col-lg-6 col-sm-12">
            <div class="d-flex align-items-center justify-content-center px-2">
          <button
            class="btn btn-lg btn-outline-dark rounded-pill fw-bolder"
            type="button"
          > <img className="me-2" src={google} alt="" />
       GOOGLE
          </button>
        </div>
            </div>
      
       
        </div>
      </div>
    </div>
  );
};

export default LogIn;
