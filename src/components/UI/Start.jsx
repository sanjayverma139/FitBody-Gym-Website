import React from "react";
import "../../Styles/start.css";
import trainerImg from "../..//assets/img/trainer.png";

const Start = () => {
  return (
    <section id="classes">
      <div className="container">
        <div className="start_wrapper">
          <div className="start_img">
            <img
              src={trainerImg}
              alt=""
              data-aos="fade-left"
              data-aos-duration="1500"
            />
          </div>

          <div
            className="start_content"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h2 className="section_title">
              Ready to make a <span className="highlights">change?</span>
            </h2>
            <p>
              Let's start this fitness journey together, where every effort and
              every drop of sweat counts. As your gym trainer, I'm here to guide
              and motivate you, pushing you beyond your perceived
              limits.Remember, the journey to a healthier and stronger you
              begins with that first step into the gym. Embrace the challenge,
              embrace the grind, and embrace the process.
            </p>

            <button className="register_btn">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;
