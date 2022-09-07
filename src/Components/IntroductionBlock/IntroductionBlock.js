import React from "react";
import "./IntroductionBlock.scss";

const IntroductionBlock = () => {
  return (
    <>
      <div className="introduction-container">
        <h1 data-cy="app-title" tabIndex={0}>
          Welcome to Roe'd To Aid
        </h1>
        <h2 data-cy="app-phrase" tabIndex={0}>
          A safe space to find a safe place.
        </h2>
        <div data-cy="app-explanation" tabIndex={0}>
          <p>
            After the U.S. Supreme Court officially reversed Roe v. Wade in June
            of 2022, millions lost a fundamental constitutional protection, the
            right to abortion.
          </p>
          <p>
            Roe'd To Aid was created to bring awareness and expand access to
            safe, authorized clinics that provide necessary healthcare to all
            birthers. This application compiles current clinic information by
            state and clearly defines authorized clinics and distinguishes them
            from misinformation centers. Users can learn about current state
            policies as well as available resources in their state.
          </p>
        </div>
      </div>
    </>
  );
};

export default IntroductionBlock;
