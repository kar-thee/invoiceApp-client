import axios from "axios";

const DeleteUserApi = async (email) => {
  //data= email as params
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_CRUDUSER}/${email}`
    );
    return response;
  } catch (e) {
    console.log(e, " err in DeleteUserApi");
    return e.response;
  }
};
export default DeleteUserApi;
