import React, { useEffect, useState } from "react";
import SearchFoundList from "../../Others/SearchFoundList";

import SearchInvoiceApi from "../../../../apis/private/others/SearchInvoiceApi";
import useStatesFunc from "../../../../hooks/useStatesFunc";

import NothingToShow from "../../Others/NothingToShow";

const CustomerScreen = () => {
  const [data, setData] = useState();
  const [count, setCount] = useState();
  const [{ token, role }] = useStatesFunc();

  useEffect(() => {
    (async () => {
      //since we dont have email, we encode from token
      const base64TokenString = token.split(".")[1];
      const { email } = JSON.parse(atob(base64TokenString));
      const roleRes = await SearchInvoiceApi(
        { key: "customerEmail", value: email },
        token
      );
      if (roleRes.data.type === "success") {
        setData(roleRes.data.dataFoundArray);
        const dataCountArray = roleRes.data.dataFoundArray;
        setCount(dataCountArray.length + 1);
      } else {
        setData(false);
        setCount(0);
      }
    })();
  }, [token]);

  return (
    <>
      <div className=" container p-md-5  my-5 py-2 shadow-lg signup-background">
        <div className="display-2 my-3 p-md-3 col text-secondary text-center shadow ">
          Welcome {role.toUpperCase()}
        </div>
        <div className="col my-2 p-md-3 mx-auto d-flex justify-content-center ">
          <div className="p-md-5 p-4 bg-dark text-center text-light mx-auto shadow">
            <div className="fw-bolder lead">
              Total Invoices For You : {count}{" "}
            </div>
          </div>
        </div>
        <div className="fw-bolder lead text-secondary ">
          Invoices Generated For You :{" "}
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

export default CustomerScreen;
