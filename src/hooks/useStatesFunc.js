import { useContext } from "react";
import stateContext from "../context/stateContext";

const useStatesFunc = () => {
  const state = useContext(stateContext);

  return [state];
};

export default useStatesFunc;
