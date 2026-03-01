import { Fragment } from "react/jsx-runtime";

function MainContent() {
  return (
    <Fragment>
      <main>
        <div className="information-container">
          <h2 id="information-header" className="center">
            Header 1
          </h2>
          <h3 id="information-content" className="center">
            Information 1
          </h3>
        </div>
        <div className="information-container">
          <h2 id="information-header" className="center">
            Header 1
          </h2>
          <h3 id="information-content" className="center">
            Information 1
          </h3>
        </div>
        <div className="information-container">
          <h2 id="information-header" className="center">
            Header 1
          </h2>
          <h3 id="information-content" className="center">
            Information 1
          </h3>
        </div>
      </main>
    </Fragment>
  );
}

export default MainContent;
