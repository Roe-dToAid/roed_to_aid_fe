import React from "react";
import yesImage from "./../../assets/feminist-lettering-compositions-and-stickers-2-png-01.png";
import flowerSymbolImage from "./../../assets/feminist-lettering-compositions-and-stickers-2-png-07.png";
import caseyPhoto from "./../../assets/CaseyF.jpeg";
import catlynPhoto from "./../../assets/CatlynB.jpeg";
import wesPhoto from "./../../assets/WesleyG.jpeg";
import irmakPhoto from "./../../assets/IrmakE.jpeg";
import lidiaPhoto from "./../../assets/LidiaK.jpeg";
import brycePhoto from "./../../assets/BryceW.jpeg";
import rachelPhoto from "./../../assets/RachelA.jpeg";
import "./AboutView.scss";

const AboutView = () => {
  return (
    <>
      <img src={yesImage} alt="person holding up fist"></img>
      <img src={flowerSymbolImage} alt="female symbol with flowers"></img>
      <img src={catlynPhoto} alt="headshot of Catlyn"></img>
      <img src={irmakPhoto} alt="headshot of Irmak"></img>
      <img src={lidiaPhoto} alt="headshot of Lidia"></img>
      <img src={rachelPhoto} alt="headshot of Rachel"></img>
      <img src={brycePhoto} alt="headshot of Bryce"></img>
      <img src={caseyPhoto} alt="headshot of Casey"></img>
      <img src={wesPhoto} alt="headshot of Wes"></img>
    </>
  )
};

export default AboutView;
