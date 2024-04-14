import React from "react";
function ComponentWithoutJSX() {
    let Pavan = React.createElement(
      "h3",
      null,
      "Displaying My Component without  JSX"
    );
    return <div>{Pavan}</div>;
  }
export default ComponentWithoutJSX;