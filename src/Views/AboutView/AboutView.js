import React, { useEffect } from 'react';
import yesImage from './../../assets/feminist-lettering-compositions-and-stickers-2-png-01.png';
import flowerSymbolImage from './../../assets/feminist-lettering-compositions-and-stickers-2-png-07.png';
import caseyPhoto from './../../assets/CaseyF.jpeg';
import catlynPhoto from './../../assets/CatlynB.jpeg';
import wesPhoto from './../../assets/WesleyG.jpeg';
import irmakPhoto from './../../assets/IrmakE.jpeg';
import lidiaPhoto from './../../assets/LidiaK.jpeg';
import brycePhoto from './../../assets/BryceW.jpeg';
import rachelPhoto from './../../assets/RachelA.jpeg';
import './Aboutview.scss';

const AboutView = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-container">
      <h1 data-cy="about-roed">About Roe'd To Aid</h1>
      <div className="copy-image-block">
        <div className="mission-container">
          <h2 data-cy="mission-title">Our Mission</h2>
          <p data-cy="mission-statement">
            Our mission is to make abortion clinics information accessible to
            everyone in the US. The reversal of Roe v. Wade will not reduce
            abortions; it will limit access to safe abortions and endanger
            millions of birthers. Roe'd To Aid was created to empower folks by
            educating on current state policies, exposing misinformation
            centers, and promoting authorized abortion clinics. Users gain the
            power to make informed decisions about where they may go to receive
            necessary healthcare.
          </p>
        </div>
        <img
          className="illustration"
          data-cy="yes-illustration"
          src={yesImage}
          alt="person holding up fist"
        ></img>
      </div>
      <div className="copy-image-block inclusivity-only">
        <img
          className="illustration"
          data-cy="flower-illustration"
          src={flowerSymbolImage}
          alt="female symbol with flowers"
        ></img>
        <div className="inclusivity-container">
          <h2 data-cy="inclusivity-title">Inclusivity Counts</h2>
          <p data-cy="inclusivity-statement">
            We recognize that restricting access to abortion increases the
            burden already placed on people with low incomes, young people,
            folks in rural areas, queer folks, and people of color. We believe
            that this issue affects everyone, everywhere and intersects the
            issues of racial, economic, and reproductive justice. Increasing
            equitable and unrestricted access to information and resources is
            the core of this ever evolving project.
            <br />
            <br />
            Roe'd To Aid prioritizes inclusivity in the way information is
            shared and presented. This application was designed with a
            mobile-first approach with an emphasis on a better user experience
            on all devices and screen sizes. With accessibility as one of our
            core values, this application is compatible with assistive
            technology devices, such as screen readers. We also utilized the
            Lighthouse evaluation tool to identify and fix common problems that
            affect this site's performance, accessibility, and user experience.
          </p>
        </div>
      </div>
      <h2 data-cy="meet">Meet the Team</h2>
      <div className="team-container">
        <div className="photo-container">
          <img
            data-cy="rachel"
            src={rachelPhoto}
            alt="headshot of Rachel"
          ></img>
          <h3>Rachel A.</h3>
        </div>
        <div className="photo-container">
          <img
            data-cy="catlyn"
            src={catlynPhoto}
            alt="headshot of Catlyn"
          ></img>
          <h3>Catlyn B.</h3>
        </div>
        <div className="photo-container">
          <img data-cy="irmak" src={irmakPhoto} alt="headshot of Irmak"></img>
          <h3>Irmak E.</h3>
        </div>
        <div className="photo-container">
          <img data-cy="lidia" src={lidiaPhoto} alt="headshot of Lidia"></img>
          <h3>Lidia K.</h3>
        </div>
        <div className="photo-container">
          <img data-cy="casey" src={caseyPhoto} alt="headshot of Casey"></img>
          <h3>Casey F.</h3>
        </div>
        <div className="photo-container">
          <img data-cy="wes" src={wesPhoto} alt="headshot of Wes"></img>
          <h3>Wes G.</h3>
        </div>
        <div className="photo-container">
          <img data-cy="bryce" src={brycePhoto} alt="headshot of Bryce"></img>
          <h3>Bryce W.</h3>
        </div>
      </div>
      <div data-cy="data-statement" className="data-statement">
        <p>
          <strong>
            The data on this website was last updated on October 5th, 2022.
          </strong>
          <br />
          Roe'd To Aid attempts to provide access to information in one place by
          combining resources found from many wonderful sites already in
          existence.
        </p>
        <p>
          For abortion seekers hoping to find the latest information we
          recommend checking out these links below, as well as any of the sites
          listed in the resources section.
          <br />
          <a href="https://www.abortionfinder.org">Abortion Finder</a>.
          <br />
          <a href="https://www.ineedana.com">I need an A</a>.
        </p>
      </div>
    </div>
  );
};

export default AboutView;
