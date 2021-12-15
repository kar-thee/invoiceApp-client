import axios from "axios";

const SignupFunc = async (body) => {
  try {
    const response = await axios.post(process.env.REACT_APP_SIGNUP, body);
    return response;
  } catch (e) {
    return e.response;
  }
};
export default SignupFunc;
