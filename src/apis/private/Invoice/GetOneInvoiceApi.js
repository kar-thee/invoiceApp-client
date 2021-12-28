import axios from "axios";

const GetOneApi = async (id, authorizationToken) => {
  // id as params
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_GETONEINVOICE}/${id}`,
      {
        headers: {
          Authorization: `BEARER ${authorizationToken}`,
        },
      }
    );
    return response;
  } catch (e) {
    console.log(e, " err in GetOneApi");
    return e.response;
  }
};
export default GetOneApi;
