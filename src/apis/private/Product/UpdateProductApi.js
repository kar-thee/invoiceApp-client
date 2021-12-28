import axios from "axios";

const UpdateProductApi = async (id, data, authorizationToken) => {
  //id as params
  // data = { name, email, password, userType }
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_CRUDPRODUCT}/${id}`,
      data,
      {
        headers: {
          Authorization: `BEARER ${authorizationToken}`,
        },
      }
    );
    return response;
  } catch (e) {
    console.log(e, " err in UpdateProductApi");
    return e.response;
  }
};
export default UpdateProductApi;
