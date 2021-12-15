import axios from "axios";

const SigninFunction = async (body) => {
  try {
    const response = await axios.post(process.env.REACT_APP_SIGNIN, body);
    return response;
  } catch (e) {
    return e.response;
  }
};
export default SigninFunction;
