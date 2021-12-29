import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import GetAllProductsApi from "../../../../apis/private/Product/GetAllProductsApi";
import Loader from "../../../../helpers/Loader";
import useDispatchFunc from "../../../../hooks/useDispatchFunc";
import useStatesFunc from "../../../../hooks/useStatesFunc";

import { ADMIN, MANAGER, EMPLOYEE } from "../../../../helpers/UserRoles";
import useUserFunc from "../../../../hooks/useUserFunc";
import NothingToShow from "../../Others/NothingToShow";

const ReadProducts = () => {
  const [state, setState] = useState();
  const [{ loading, token }] = useStatesFunc();
  const navigate = useNavigate();
  const { id } = useParams();
  const [dispatch] = useDispatchFunc();
  const [, , checkUserAccess] = useUserFunc();

  useEffect(() => {
    (async () => {
      dispatch({ type: "loadingStart" });
      const { data } = await GetAllProductsApi(token);
      if (data.type === "success") {
        toast.success(data.msg);
        setState(data.productArray);
        dispatch({ type: "loadingStop" });
      } else {
        toast.error(data.msg);
      }
    })();
  }, [dispatch, id, token]);

  if (!checkUserAccess([ADMIN, MANAGER, EMPLOYEE])) {
    toast.warning("You cant access");
    return (
      <>
        <NothingToShow />
      </>
    );
  }

  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }
  return (
    <>
      <div className="shadow signup-background p-md-2 my-3 container">
        <div className="my-3 p-3">
          <table className="table  table-hover fw-bold text-center">
            <thead>
              <tr>
                <th className="text-break">Product Name</th>
                <th className="text-break">Stock Quantity</th>
              </tr>
            </thead>
            <tbody>
              {state &&
                state.map((product) => (
                  <tr
                    key={product._id}
                    className="mouseCursorChanger "
                    onClick={() =>
                      navigate(`/app/product/readOne/${product._id}`)
                    }
                  >
                    <td className="text-break">{product.productName}</td>
                    <td className="text-break">{product.stockQuantity}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ReadProducts;
