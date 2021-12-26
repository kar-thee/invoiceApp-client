import axios from "axios";

const UpdateUserApi = async (id, data) => {
  // id as params
  //data =  { email, name, userType }
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_CRUDUSER}/${id}`,
      data
    );
    return response;
  } catch (e) {
    console.log(e, " err in UpdateUserApi");
    return e.response;
  }
};
export default UpdateUserApi;
