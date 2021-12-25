import axios from "axios";

const InvoiceFetchDataFunc = async (data) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_INVOICEFETCHDATA}/${data}`
    );
    return response;
  } catch (e) {
    return e.response;
  }
};
export default InvoiceFetchDataFunc;
