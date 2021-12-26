import axios from "axios";

const CreateInvoiceApi = async (data) => {
  //    data = {
  //     invoiceLogoImg,
  //     sellerName,
  //     customerName,
  //     customerEmail,
  //     productName,
  //     qty,
  //     price,
  //     tax,
  //     dueDate,
  //   }
  try {
    const response = await axios.post(process.env.REACT_APP_CRUDINVOICE, data);
    return response;
  } catch (e) {
    console.log(e, " err in CreateInvoiceApi");
    return e.response;
  }
};
export default CreateInvoiceApi;
