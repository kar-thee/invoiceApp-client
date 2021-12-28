import axios from "axios";

const GetAllProductsApi = async (authorizationToken) => {
  // NO DATA
  try {
    const response = await axios.get(process.env.REACT_APP_CRUDPRODUCT, {
      headers: {
        Authorization: `BEARER ${authorizationToken}`,
      },
    });
    return response;
  } catch (e) {
    console.log(e, " err in GetAllProductsApi");
    return e.response;
  }
};
export default GetAllProductsApi;
