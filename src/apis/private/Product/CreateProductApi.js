import axios from "axios";

const CreateProductApi = async (data) => {
  // data = { productName, stockQuantity, price, tax }
  try {
    const response = await axios.post(process.env.REACT_APP_CRUDPRODUCT, data);
    return response;
  } catch (e) {
    console.log(e, " err in CreateProductApi");
    return e.response;
  }
};
export default CreateProductApi;
