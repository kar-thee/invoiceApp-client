import axios from "axios";

const EmailActivationFunction = async (body) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_ACCOUNTACTIVATION,
      body
    );
    return response;
  } catch (e) {
    return e.response;
  }
};

export default EmailActivationFunction;
