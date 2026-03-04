import { Fragment } from "react/jsx-runtime";
import InformationContainer from "./InformationContainer";

function MainContent() {
  return (
    <Fragment>
      <main>
        <InformationContainer
          header="About"
          information={["placeholder description"]}
        />
        <InformationContainer
          header="Get started"
          information={["Placeholder content 1", "Placeholder content 2"]}
        />
      </main>
    </Fragment>
  );
}

export default MainContent;
