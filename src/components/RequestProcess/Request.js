import React from "react";
import { useState } from "react";

const Request = () => {
    const [profile, setProfile] = useState("");
    const imageStorageKey = "cb1a7d020847680d78193b615dbd3aff";
    const handleProfile = async (e)=>{
        e.preventDefault();
        const profileImg = e.target.profileImg.files[0];
        const formData = new FormData();
        formData.append("image", profileImg);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageStorageKey}`;
        const request = await fetch(url, {
          method: "POST",
          body: formData,
        });
        console.log(profile, "before");
        const response = await request.json();
        // await updateProfile({ photoURL: response?.data?.url });
    setProfile(response?.data?.url)
    console.log(profile,"after");
     
    }
  return (
    <div>
      {/* <!-- porcess section start here --> */}
      <div className="process__section">
        <div className="container">
          <div className="process__inner">
            <form className="login__form process__form">
              <a href="#">
                <img src="assets/images/icon/arrow_left.png" alt="icon" />{" "}
              </a>{" "}
              <br />
              <br />
              <label className="text-start" for="name">
                What is your name?
              </label>
              <input type="name" placeholder="name" />
              {/* <!-- <input type="password" placeholder="Password"> -->
                    <!-- <a href="#" className="forgot_pass">비밀번호 찾기</a>   -->
                    <!-- <button className="login_btn">LOG IN</button> --> */}
              <div className="feedback" id="request__process">
                <p>Content you want to get feedback</p>
                <div className="feedback__pill d-flex flex-wrap justify-content-start">
                  <a href="#">Original Sound</a>
                  <a href="#">Beat & Hook</a>
                  <a href="#">Question on Industry</a>
                </div>
              </div>
              <button className="signUp_btn d-flex justify-content-between align-items-center ps-3 pe-3">
                Next{" "}
                <img src="assets/images/icon/arrow_right.png" alt="image" />
              </button>
              {/* <!-- <div className="login__google">
                        <a href="#"> <img src="assets/images/icon/google.svg" alt="icon"/> GOOGLE</a>
                        <a href="#"> <img src="assets/images/icon/google.svg" alt="icon"/> GOOGLE</a>
                    </div> --> */}
            </form>
          </div>
        </div>
      </div>
      {/* <!-- porcess section start here --> */}

      {/* <!-- request section start here --> */}
      <div className="request__section">
        <div className="container">
          <div className="request__inner">
            <a href="#">
              <img src="assets/images/icon/arrow_left.png" alt="icon" />
            </a>{" "}
            <br />
            <br />
            <div className="row flex-wrap-reverse">
              <div className="col-md-6">
                <div className="request__content">
                  <div className="title">
                    <h2>Songhee Hyun’s Music Class</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod, consectetur adipisicing elit, sed do
                      eiusmod
                    </p>
                  </div>
                  <div className="content">
                    <h4>CONTENTS GUIDLINE</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod, consectetur adipisicing elit, sed do
                      eiusmod
                    </p>
                  </div>
                  <div className="content">
                    <h4>RECOMMENDATION</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod, consectetur adipisicing elit, sed do
                      eiusmod
                    </p>
                  </div>
                  <div className="title">
                    <h2>Songhee Hyun’s Music Class</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod, consectetur adipisicing elit, sed do
                      eiusmod
                    </p>
                  </div>
                  <div className="content">
                    <h4>CONTENTS GUIDLINE</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod, consectetur adipisicing elit, sed do
                      eiusmod
                    </p>
                  </div>
                  <div className="content">
                    <h4>RECOMMENDATION</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod, consectetur adipisicing elit, sed do
                      eiusmod
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="select__file">
                  <div className="wrapper">
                    <form onSubmit={handleProfile} className="login__form process__form upload__form">
                      {/* <!-- <h1>Beautiful CSS-Only File Inputs</h1>
                                    <p>Create beautifully designed, CSS-only, semantic and accessible file upload buttons with the <code>label</code> element.</p> --> */}

                      <input  accept="image/png, image/jpeg, image/jpg"     name="profileImg" type="file" id="file" />
                      <label className="text-center" for="file">
                        {" "}
                        <p>CHOOSE FILE</p> <br /> <span>upto 2GB</span>{" "}
                      </label>

                      <textarea
                        name="question"
                        id="question"
                        placeholder="Add a question or context (optional)"
                      ></textarea>
                      <button type="submit">submit</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <form className="login__form next__button">
              <button className="signUp_btn d-flex justify-content-between align-items-center ps-3 pe-3">
                Next{" "}
                <img src="assets/images/icon/arrow_right.png" alt="image" />
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- request section end here --> */}

      {/* <!-- payment section start here --> */}
      <div className="payment__section">
        <div className="container">
          <div className="payment__inner">
            <div className="row flex-wrap-reverse">
              <div className="col-md-6">
                <div className="request__content payment__content">
                  <div className="title">
                    <h2>Songhee Hyun’s Music Class</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod, consectetur adipisicing elit, sed do
                      eiusmod
                    </p>
                  </div>
                  <div className="content">
                    <h4>PERSONAL FEEDBACK</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod, consectetur adipisicing elit, sed do
                      eiusmod
                    </p>
                  </div>
                  <div className="content">
                    <h4>PAYMENT POLICY</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod, consectetur adipisicing elit, sed do
                      eiusmod
                    </p>
                  </div>
                  <div className="content">
                    <h4>PRIVACY POLICY</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod, consectetur adipisicing elit, sed do
                      eiusmod
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="play__payment">
                  <img src="assets/images/section/MaskGroup.png" alt="image" />
                </div>
              </div>
            </div>

            <form className="login__form next__button">
              <button className="signUp_btn d-flex justify-content-between align-items-center ps-3 pe-3">
                Next{" "}
                <img src="assets/images/icon/arrow_right.png" alt="image" />
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- payment section end here --> */}

      {/* <!-- B12 section start here --> */}
      <div className="B12__section">
        <div className="container">
          <div className="B12__inner">
            <div className="B12__finance">
              <div className="first__step">
                <h4>결제 금액을 확인해주세요.</h4>
                <div className="finance">
                  <p>상품</p>
                  <p>축가</p>
                </div>
                <div className="finance">
                  <p>금액</p>
                  <p>금액</p>
                </div>
                <div className="finance">
                  <p>할인/혜택</p>
                  <p>- 0원</p>
                </div>
                <hr />
                <div className="finance">
                  <p>총 결제금액</p>
                  <p>250,000원</p>
                </div>
              </div>

              <div className="second__step">
                <h4>결제 수단을 선택해주세요.</h4>
                <div className="payment__way">
                  <a href="#">Paypal</a>
                  <a href="#">신용카드</a>
                  <a href="#">카카오페이</a>
                  <a href="#">네이버페이</a>
                  <a href="#">토스</a>
                  <a href="#">기타결제수단</a>
                </div>
              </div>
              <div className="third__step d-flex justify-content-between align-items-center">
                <img src="assets/images/icon/tik.png" alt="icon" />{" "}
                <p>위 구매조건을 확인, 결제진행에 동의합니다.</p>
              </div>
            </div>

            <form className="login__form d-flex justify-content-between align-items-center">
              <button style={{width:" 27%", backgroundColor: "#000", color: "#fff"}}>
                {" "}
                <img
                  src="assets/images/icon/arrow-left-white.png"
                  alt="icon"
                />{" "}
              </button>
              <button
                style={{width: "68%"}}
                className="signUp_btn d-flex justify-content-between align-items-center ps-3 pe-3 mt-0"
              >
                Next{" "}
                <img src="assets/images/icon/arrow_right.png" alt="image" />
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- B12 section end here --> */}

      {/* <!-- B1 section start here --> */}
      <div className="B1__section">
        <div className="container">
          <div className="B1__inner">
            <div className="B1__main">
              <img src="assets/images/icon/round_tik.png" alt="image" />
              <h4>피드백 요청 완료</h4>
              <p>
                탤런트의 메시지 전달 완료 시 핸드폰으로 알려드려요. 메시지
                요청은 7일간 유효하며, 이후 만료될 수 있습니다. 탤런트의 일정
                또는 사정에 따라 요청이 취소될 수 있습니다. 요청 만료 또는 취소
                시 자동으로 결제가 취소됩니다.
              </p>
            </div>
            <form className="login__form">
              <button className="signUp_btn d-flex justify-content-between align-items-center ps-3 pe-3 mt-0">
                Next{" "}
                <img src="assets/images/icon/arrow_right.png" alt="image" />
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- B1 section start here --> */}

      {/* <!-- B2 section start here --> */}
      <div className="B2__section">
        <div className="container">
          <div className="B2__inner">
            <div className="B1__main">
              <img src="assets/images/icon/round_cross.png" alt="image" />
              <h4>피드백 요청 완료</h4>
              <p>
                탤런트의 메시지 전달 완료 시 핸드폰으로 알려드려요. 메시지
                요청은 7일간 유효하며, 이후 만료될 수 있습니다. 탤런트의 일정
                또는 사정에 따라 요청이 취소될 수 있습니다. 요청 만료 또는 취소
                시 자동으로 결제가 취소됩니다.
              </p>
            </div>
            <form className="login__form">
              <button className="signUp_btn d-flex justify-content-between align-items-center ps-3 pe-3 mt-0">
                Next{" "}
                <img src="assets/images/icon/arrow_right.png" alt="image" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Request;
