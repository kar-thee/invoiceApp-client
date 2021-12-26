import axios from "axios";

const InvoicePdfDownloadApi = async (data) => {
  try {
    const response = await axios.get(
      `https://karthee-invoice-app-server.herokuapp.com/api/public/invoice/pdf/${data}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/pdf",
        },
        responseType: "blob",
      }
    );

    return response;
  } catch (e) {
    console.log(e.message, " err-InvoicePdfDownloadApi");
  }
};
export default InvoicePdfDownloadApi;
