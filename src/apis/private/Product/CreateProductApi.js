import axios from "axios";

const CreateProductApi = async (data, authorizationToken) => {
  // data = { productName, stockQuantity, price, tax }
  try {
    const response = await axios.post(process.env.REACT_APP_CRUDPRODUCT, data, {
      headers: {
        Authorization: `BEARER ${authorizationToken}`,
      },
    });
    return response;
  } catch (e) {
    console.log(e, " err in CreateProductApi");
    return e.response;
  }
};
export default CreateProductApi;
