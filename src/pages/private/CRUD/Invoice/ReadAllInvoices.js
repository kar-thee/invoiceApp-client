import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import GetAllInvoicesApi from "../../../../apis/private/Invoice/GetAllInvoicesApi";

import Loader from "../../../../helpers/Loader";
import useDispatchFunc from "../../../../hooks/useDispatchFunc";
import useStatesFunc from "../../../../hooks/useStatesFunc";

const ReadAllInvoices = () => {
  const [{ token, loading }] = useStatesFunc();
  const [state, setState] = useState();
  const [dispatch] = useDispatchFunc();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      dispatch({ type: "loadingStart" });
      const { data } = await GetAllInvoicesApi(token);
      dispatch({ type: "loadingStop" });
      if (data.type === "success") {
        toast.success(data.msg);
        setState(data.invoiceArray);
      } else {
        toast.error(data.msg);
      }
    })();
  }, [dispatch, token]);

  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }
  return (
    <>
      <div className=" container  p-md-5   my-3 text-dark fw-bold ">
        <div className="col signup-background shadow">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Product Name</th>
                <th className="d-none d-md-table-cell">Total</th>
              </tr>
            </thead>
            <tbody>
              {state &&
                state.map((invoiceObj) => (
                  <tr
                    key={invoiceObj._id}
                    className="text-break mouseCursorChanger"
                    onClick={() =>
                      navigate(`/app/invoice/readOne/${invoiceObj._id}`)
                    }
                  >
                    <td>{invoiceObj.customerName}</td>
                    <td>{invoiceObj.productName}</td>
                    <td className="d-none d-md-table-cell">
                      {invoiceObj.totalFinalAmt}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ReadAllInvoices;
