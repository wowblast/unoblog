import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.container} data-testId="aboutComponent">
      <h1 className={styles.header} data-testId="aboutTitle">
        About EpicEnigma Echo
      </h1>
      <div className={styles.content} data-testId="aboutContent">
        <p>
          Welcome to EpicEnigma Echo - your go-to platform for exploring the
          thrilling world of gaming, entertainment, Twitch, YouTube, and
          technology!
        </p>
        <p>
          At EpicEnigma Echo, we are passionate about delivering the latest and
          greatest content in the realms of gaming and entertainment. Our
          platform serves as a gateway for enthusiasts to immerse themselves in
          the vibrant worlds of Twitch and YouTube, where creators push the
          boundaries of creativity.
        </p>
        <p>
          Our mission is to keep you ahead with the latest tech updates and to
          provide a space for you to explore the exciting intersection of
          innovation and fun.
        </p>
        <blockquote className={styles.quote} data-testId="aboutQuote">
          “In the ever-evolving landscape of technology and entertainment,
          EpicEnigma Echo is dedicated to creating a culture where users come
          first. We believe in empowering and supporting our community, and we
          prioritize the success and satisfaction of our users.”
        </blockquote>
      </div>
    </div>
  );
};

export default About;
