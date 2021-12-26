import axios from "axios";

const GetOneProductApi = async (id) => {
  // data = id
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_CRUDPRODUCT}/${id}`
    );
    return response;
  } catch (e) {
    console.log(e, " err in GetOneProductApi");
    return e.response;
  }
};
export default GetOneProductApi;
