import axios from "axios";

const UpdateUserApi = async (id, data, authorizationToken) => {
  // id as params
  //data =  { email, name, userType }
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_CRUDUSER}/${id}`,
      data,
      {
        headers: {
          Authorization: `BEARER ${authorizationToken}`,
        },
      }
    );
    return response;
  } catch (e) {
    console.log(e, " err in UpdateUserApi");
    return e.response;
  }
};
export default UpdateUserApi;
