import React from "react";
import { useNavigate } from "react-router-dom";

const SearchFoundList = ({ state }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="col signup-background shadow my-md-5 my-3">
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
    </>
  );
};

export default SearchFoundList;
