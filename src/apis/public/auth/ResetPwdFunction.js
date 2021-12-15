import axios from "axios";

const ResetPwdFunction = async (body, authorizationToken) => {
  try {
    const response = await axios.post(process.env.REACT_APP_RESETPWD, body, {
      headers: {
        Authorization: `BEARER ${authorizationToken}`,
      },
    });
    return response;
  } catch (e) {
    return e.response;
  }
};
export default ResetPwdFunction;
