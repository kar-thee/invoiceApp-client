import axios from "axios";

const GetOneUserApi = async (id, authorizationToken) => {
  // data= id  as params
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_CRUDUSER}/${id}`,
      {
        headers: {
          Authorization: `BEARER ${authorizationToken}`,
        },
      }
    );
    return response;
  } catch (e) {
    console.log(e, " err in GetOneUserApi");
    return e.response;
  }
};
export default GetOneUserApi;
