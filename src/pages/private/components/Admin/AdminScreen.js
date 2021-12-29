import React from "react";

import useStatesFunc from "../../../../hooks/useStatesFunc";
import MainScreenTemplate from "../MainScreenTemplate";

const AdminScreen = () => {
  const [{ role }] = useStatesFunc();
  return (
    <>
      <MainScreenTemplate role={role} />
    </>
  );
};

export default AdminScreen;
