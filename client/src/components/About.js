import React from "react";
import "../styles/Aboutpage.css";

const About = () => {
  return (
    <div className="about-page">
      <h1>ABOUT ME</h1>
      <section class="about">
        <div class="about-info">
          <div class="about-img">
            <img
              className="about-picture"
              src="/img/About_Pic.gif"
              alt="portrait"
            />
          </div>
          <div>
            <p>
              GeeksforGeeks is a leading platform that provides computer science
              resources and coding challenges for programmers and technology
              enthusiasts, along with interview and exam preparations for
              upcoming aspirants. With a strong emphasis on enhancing coding
              skills and knowledge, it has become a trusted destination for over
              12 million plus registered users worldwide.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
