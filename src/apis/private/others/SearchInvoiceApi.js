// invoiceDate?value=25/12/2021

import axios from "axios";

const SearchInvoiceApi = async (key, value, authorizationToken) => {
  //key and value
  //key-> as params
  //values -> as queryParams
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SEARCHINVOICE}/${key}?value=${value}`,
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
