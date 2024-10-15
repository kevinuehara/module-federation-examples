import * as _ from "lodash";

export const Lodash = () => {
  return (
    <div style={{ overflowY: "auto", height: "300px" }}>
      <h2>Lodash API's Manifest Provider</h2>
      <div>
        {Object.keys(_).map((key, index) => {
          return <li key={index}>{key}</li>;
        })}
      </div>
    </div>
  );
};
