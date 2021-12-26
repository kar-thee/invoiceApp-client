import axios from "axios";

const GetInvoiceEssentials = async () => {
  //get all essential data for invoiceUI
  try {
    const response = await axios.get(process.env.REACT_APP_INVOICEESSENTIALS);
    return response;
  } catch (e) {
    console.log(e.message, "   err-in GetInvoiceEssentials");
    return e.response;
  }
};

export default GetInvoiceEssentials;
