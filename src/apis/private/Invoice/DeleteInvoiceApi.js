import axios from "axios";

const DeleteInvoiceApi = async (id) => {
  // id as params
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_CRUDPRODUCT}/${id}`
    );
    return response;
  } catch (e) {
    console.log(e, " err in DeleteInvoiceApi");
    return e.response;
  }
};
export default DeleteInvoiceApi;
