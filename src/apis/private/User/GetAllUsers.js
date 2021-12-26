import axios from "axios";

const GetAllUserApi = async () => {
  //no data
  try {
    const response = await axios.get(process.env.REACT_APP_CRUDUSER);
    return response;
  } catch (e) {
    console.log(e, " err in GetAllUserApi");
    return e.response;
  }
};
export default GetAllUserApi;
