import axios from "axios";

const GetInvoiceEssentials = async (authorizationToken) => {
  //get all essential data for invoiceUI
  try {
    const response = await axios.get(process.env.REACT_APP_INVOICEESSENTIALS, {
      headers: {
        Authorization: `BEARER ${authorizationToken}`,
      },
    });
    return response;
  } catch (e) {
    console.log(e.message, "   err-in GetInvoiceEssentials");
    return e.response;
  }
};

export default GetInvoiceEssentials;
