import { Fragment } from "react/jsx-runtime";

interface Props {
  header: string;
  information: Array<String>;
}

const InformationContainer = ({ header, information }: Props) => {
  return (
    <Fragment>
      <div className="information-container">
        <h2 id="information-header" className="center">
          {header}
        </h2>
        {information.map((info) => (
          <h3 id="information-content" className="center">
            {info}
          </h3>
        ))}
      </div>
    </Fragment>
  );
};

export default InformationContainer;
