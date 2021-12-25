import React from "react";
import Navigation from "./components/Navigation";

import useStatesFunc from "./hooks/useStatesFunc";

const NavigationBar = () => {
  const [state] = useStatesFunc();
  return (
    <>
      <> {state.invoiceView ? null : <Navigation />}</>
    </>
  );
};

export default NavigationBar;
