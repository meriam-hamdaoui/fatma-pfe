import React from "react";
import "./about.css";
import logo from "../../assets/img/trendy-agency.jpg";

const About = () => {
  return (
    <section className="about">
      <h1>Qui Somme-Nous?</h1>
      <img src={logo} alt="logo" />
    </section>
  );
};

export default About;
