import axios from "axios";

const GetOneUserApi = async (id) => {
  // data= id  as params
  try {
    const response = await axios.get(`${process.env.REACT_APP_CRUDUSER}/${id}`);
    return response;
  } catch (e) {
    console.log(e, " err in GetOneUserApi");
    return e.response;
  }
};
export default GetOneUserApi;
