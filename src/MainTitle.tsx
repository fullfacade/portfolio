import { Fragment } from "react/jsx-runtime";

function MainTitle() {
  return (
    <Fragment>
      <header className="header">
        <img
          src="/src/assets/logo.png"
          alt="Portfolio Picture"
          id="profile-picture"
          className="center"
        ></img>
        <h1 className="center" id="full-name">
          Placeholder Name
        </h1>
        <p className="center" id="self-title">
          Developer
        </p>
      </header>
    </Fragment>
  );
}

export default MainTitle;
