import React from "react";
import "../../Styles/exercises.css";
import lunges from "../../assets/img/lunges.png";
import yoga from "../../assets/img/yoga-pose.png";
import extended from "../../assets/img/extended.png";

const Exercises = () => {
  return (
    <section id="schedule">
      <div className="container exercise_container">
        <div className="exercise_top">
          <h2 className="section_title">
            Benifits of <span className="highlights">Exercise</span>
          </h2>
          <p>
            ultimate fitness destination, where your journey to a healthier,
            stronger
            <br /> you begins. Unleash Your Potential. Join Us Today!
          </p>
        </div>

        {/* ============== exercise list ============== */}
        <div className="exercise_wrapper">
          <div
            className="exercise_item"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <span className="exercise_icon">
              <img src={lunges} alt="" />
            </span>

            <div className="exercise_content">
              <h4>Healthy Life</h4>
              <p>
                ultimate fitness destination, where your journey to a healthier
              </p>
            </div>
          </div>

          <div
            className="exercise_item"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <span className="exercise_icon">
              <img src={yoga} alt="" />
            </span>

            <div className="exercise_content">
              <h4>Reducing Blood Pressure </h4>
              <p>
                ultimate fitness destination, where your journey to a healthier
              </p>
            </div>
          </div>

          <div
            className="exercise_item"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <span className="exercise_icon">
              <img src={extended} alt="" />
            </span>

            <div className="exercise_content">
              <h4>Increased Flexibility</h4>
              <p>
                ultimate fitness destination, where your journey to a healthier
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exercises;
