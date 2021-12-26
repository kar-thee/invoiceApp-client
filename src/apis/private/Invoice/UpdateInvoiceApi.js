import axios from "axios";

const UpdateInvoiceApi = async (id, data) => {
  //id as params
  // data = { invoiceLogoImg, productName, qty, price, tax, dueDate }
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_CRUDPRODUCT}/${id}`,
      data
    );
    return response;
  } catch (e) {
    console.log(e, " err in UpdateInvoiceApi");
    return e.response;
  }
};
export default UpdateInvoiceApi;
