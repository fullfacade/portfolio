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
          header="Certifications"
          information={[
            "placeholder certification 1",
            "placeholder certification 2",
          ]}
        />
        <InformationContainer
          header="Projects/Demo"
          information={["placeholder link 1", "placeholder link 2"]}
        />
      </main>
    </Fragment>
  );
}

export default MainContent;
