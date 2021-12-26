import axios from "axios";

const CreateUserApi = async (data) => {
  // data = { name, email, password, userType }
  try {
    const response = await axios.post(process.env.REACT_APP_CRUDUSER, data);
    return response;
  } catch (e) {
    console.log(e, " err in CreateUserApi");
    return e.response;
  }
};
export default CreateUserApi;
