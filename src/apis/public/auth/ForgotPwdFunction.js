import axios from "axios";

const ForgotPwdFunction = async (body) => {
  try {
    const response = await axios.post(process.env.REACT_APP_FORGOTPWD, body);
    return response;
  } catch (e) {
    return e.response;
  }
};
export default ForgotPwdFunction;
