import { useContext } from "react";
import dispatchContext from "../context/dispatchContext";

const useDispatchFunc = () => {
  const dispatch = useContext(dispatchContext);

  return [dispatch];
};

export default useDispatchFunc;
