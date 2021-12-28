import axios from "axios";

const DeleteUserApi = async (email, authorizationToken) => {
  //data= email as params
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_CRUDUSER}/${email}`,
      {
        headers: {
          Authorization: `BEARER ${authorizationToken}`,
        },
      }
    );
    return response;
  } catch (e) {
    console.log(e, " err in DeleteUserApi");
    return e.response;
  }
};
export default DeleteUserApi;
