import { Fragment } from "react/jsx-runtime";

function MainTitle() {
  return (
    <Fragment>
      <header className="header">
        <img
          src="/profilePicture.png"
          alt="Portfolio Picture"
          id="profile-picture"
          className="center"
        ></img>
        <h1 className="center" id="app-name">
          Magilearn
        </h1>
        <p className="center" id="app-description">
          A personal self-made Japanese vocab learning app for the purpose of
          development practice
        </p>
      </header>
    </Fragment>
  );
}

export default MainTitle;
