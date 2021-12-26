import axios from "axios";

const GetAllProductsApi = async () => {
  // NO DATA
  try {
    const response = await axios.get(process.env.REACT_APP_CRUDPRODUCT);
    return response;
  } catch (e) {
    console.log(e, " err in GetAllProductsApi");
    return e.response;
  }
};
export default GetAllProductsApi;
