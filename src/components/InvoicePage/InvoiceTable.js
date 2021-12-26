import React from "react";

const InvoiceTable = ({
  productName,
  qty,
  price,
  tax,
  taxCost,
  costAfterTax,
  totalTaxAmt,
  totalFinalAmt,
}) => {
  return (
    <>
      {/* here table */}
      <div>
        <table className="table mb-5" style={{ lineHeight: "55px" }}>
          <thead>
            <tr className="">
              <th>S.No</th>
              <th>Description</th>
              <th>Qty</th>
              <th title="per quantity">Price</th>
              <th title="per quantity">Tax%</th>
              <th title="per quantity">Tax Amt</th>
              <th title="per quantity">Total</th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="">
              <td>1.</td>
              <td>
                <div className="text-wrap text-break">{productName}</div>
              </td>
              <td>{qty}</td>
              <td>{price}</td>
              <td>{tax}</td>
              <td>{taxCost}</td>
              <td>{costAfterTax}</td>
            </tr>
            {/* here total Amount */}
            <tr className="my-5 py-5">
              <td colSpan="5" className="fw-bold">
                Total Amount
              </td>
              <td>₹{totalTaxAmt}</td>
              <td>₹{totalFinalAmt}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default InvoiceTable;
