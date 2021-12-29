import React from "react";

import useStatesFunc from "../../../../hooks/useStatesFunc";
import MainScreenTemplate from "../MainScreenTemplate";

const EmployeeScreen = () => {
  const [{ role }] = useStatesFunc();
  return (
    <>
      <MainScreenTemplate role={role} />
    </>
  );
};

export default EmployeeScreen;
