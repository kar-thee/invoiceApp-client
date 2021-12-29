import React, { useEffect, useState } from "react";
import SearchFoundList from "../Others/SearchFoundList";

import SearchInvoiceApi from "../../../apis/private/others/SearchInvoiceApi";
import useStatesFunc from "../../../hooks/useStatesFunc";

import NothingToShow from "../Others/NothingToShow";

const MainScreenTemplate = ({ role }) => {
  const [data, setData] = useState();
  const [count, setCount] = useState();
  const [{ token }] = useStatesFunc();

  useEffect(() => {
    (async () => {
      const roleRes = await SearchInvoiceApi(
        { key: "invoiceCreaterRole", value: role },
        token
      );
      if (roleRes.data.type === "success") {
        setData(roleRes.data.dataFoundArray);
      } else {
        setData(false);
      }
    })();
  }, [role, token, count]);

  useEffect(() => {
    (async () => {
      const today = new Date().toLocaleDateString();
      const countRes = await SearchInvoiceApi(
        { key: "invoiceDate", value: today },
        token
      );
      if (countRes.data.type === "success") {
        const dataCountArray = countRes.data.dataFoundArray;
        setCount(dataCountArray.length + 1);
      } else {
        setCount(0);
      }
    })();
  }, [token]);

  return (
    <>
      <div className="col container p-md-5 py-2 my-5 shadow-lg signup-background">
        <div className="display-2 my-3 p-md-3 col text-secondary text-center shadow ">
          Welcome {role.toUpperCase()}
        </div>
        <div className="col my-2 p-md-3 mx-auto d-flex justify-content-center ">
          <div className="p-md-5 p-4 bg-dark text-center text-light mx-auto shadow">
            <div className="fw-bolder lead">
              Invoice Counts Today : {count}{" "}
            </div>
          </div>
        </div>
        <div className="fw-bolder lead text-secondary ">
          Invoices Created By You :
        </div>
        <div className="">
          {data ? (
            <SearchFoundList state={data} />
          ) : (
            <>
              <div className="d-block d-md-none text-danger text-center bg-warning my-2 p-2">
                Not Found
              </div>

              <div className="d-none d-md-block">
                <NothingToShow />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default MainScreenTemplate;
