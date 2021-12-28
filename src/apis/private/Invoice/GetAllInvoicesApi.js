import axios from "axios";

const GetAllInvoicesApi = async (authorizationToken) => {
  // no data
  try {
    const response = await axios.get(process.env.REACT_APP_CRUDINVOICE, {
      headers: {
        Authorization: `BEARER ${authorizationToken}`,
      },
    });
    return response;
  } catch (e) {
    console.log(e, " err in GetAllInvoicesApi");
    return e.response;
  }
};
export default GetAllInvoicesApi;
