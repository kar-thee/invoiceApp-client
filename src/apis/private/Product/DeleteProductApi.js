import axios from "axios";

const CreateUserApi = async (id, authorizationToken) => {
  // data = { name, email, password, userType }
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_CRUDPRODUCT}/${id}`,
      {
        headers: {
          Authorization: `BEARER ${authorizationToken}`,
        },
      }
    );
    return response;
  } catch (e) {
    console.log(e, " err in CreateUserApi");
    return e.response;
  }
};
export default CreateUserApi;
