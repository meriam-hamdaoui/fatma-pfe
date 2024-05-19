import React from "react";
import "./home.css";
import bg from "../../assets/img/Yellow 3D.png";

const Home = () => {
  return (
    <section id="home" className="home">
      <h1>welcome to trendy agency</h1>
      <img src={bg} alt="yellow-3d" width={"auto"} height={650} />
    </section>
  );
};

export default Home;
