// invoiceDate?value=25/12/2021

import axios from "axios";

const SearchInvoiceApi = async (data, authorizationToken) => {
  //key and value
  //key-> as params
  //values -> as queryParams
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_SEARCHINVOICE}`,
      data,
      {
        headers: {
          Authorization: `BEARER ${authorizationToken}`,
        },
      }
    );
    return response;
  } catch (e) {
    console.log(e, " err-in SearchInvoiceApi ");
    return e.response;
  }
};
export default SearchInvoiceApi;
