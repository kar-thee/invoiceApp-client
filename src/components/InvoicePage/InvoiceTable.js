import React from "react";

const InvoiceTable = () => {
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
              <th title="per quantity">Tax</th>
              <th title="per quantity">Tax Amt</th>
              <th title="per quantity">Total</th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="">
              <td>1.</td>
              <td>
                <div className="text-wrap text-break">
                  {" "}
                  Graphics Card RTX 2070 Super
                </div>
              </td>
              <td>2</td>
              <td>50000.00</td>
              <td>12%</td>
              <td>{((12 / 100) * 50000).toFixed(2)}</td>
              <td>{((112 / 100) * 50000).toFixed(2)}</td>
            </tr>
            {/* here total Amount */}
            <tr className="my-5 py-5">
              <td colSpan="5" className="fw-bold">
                Total Amount
              </td>
              <td>₹{((12 / 100) * 50000 * 2).toFixed(2)}</td>
              <td>₹{((112 / 100) * 50000 * 2).toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default InvoiceTable;
