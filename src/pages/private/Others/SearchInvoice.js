import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import SearchInvoiceApi from "../../../apis/private/others/SearchInvoiceApi";
import MiniSpinner from "../../../helpers/MiniSpinner";
import useDispatchFunc from "../../../hooks/useDispatchFunc";
import useStatesFunc from "../../../hooks/useStatesFunc";
import NothingToShow from "./NothingToShow";
import SearchFoundList from "./SearchFoundList";

const SearchInvoice = () => {
  const [state, setState] = useState({ key: "", value: "" });
  const [helpText, setHelpText] = useState("");
  const [tableData, setTableData] = useState();
  const [nothing, setNothing] = useState(false);

  const [{ loading, token }] = useStatesFunc();
  const [dispatch] = useDispatchFunc();

  const optionsArray = [
    "sellerName",
    "customerName",
    "customerEmail",
    "invoiceNo",
    "invoiceDate",
    "productName",
    "invoiceCreaterName",
    "invoiceCreaterRole",
    "invoiceCreaterEmail",
  ];

  useEffect(() => {
    const assignHelpText = () => {
      if (!state.key) {
        return;
      }
      switch (state.key) {
        case "sellerName": {
          setHelpText("kaeIMPEX pvt ltd.");
          break;
        }
        case "customerName": {
          setHelpText("customer1");
          break;
        }
        case "customerEmail": {
          setHelpText("customer1@gmail.com");
          break;
        }
        case "invoiceNo": {
          setHelpText("kae-40379667812");
          break;
        }
        case "invoiceDate": {
          setHelpText("12/28/2021");
          break;
        }
        case "productName": {
          setHelpText("iphone 13 pro");
          break;
        }
        case "invoiceCreaterName": {
          setHelpText("karthee");
          break;
        }
        case "invoiceCreaterRole": {
          setHelpText("admin/manager/employee");
          break;
        }
        case "invoiceCreaterEmail": {
          setHelpText("ourworldourpeople@gmail.com");
          break;
        }
        case "0": {
          setHelpText("");
          break;
        }
        default: {
          break;
        }
      }
    };
    assignHelpText();
  }, [state.key]);

  const searchFunc = async (ev) => {
    setTableData("");
    setNothing("");
    console.log(state, " state");
    ev.preventDefault();
    dispatch({ type: "loadingStart" });
    const body = { key: state.key, value: state.value };
    const { data } = await SearchInvoiceApi(body, token);
    dispatch({ type: "loadingStop" });

    if (data.type === "success") {
      toast.success(data.msg);
      setTableData(data.dataFoundArray);
    } else {
      toast.error(data.msg);
      setNothing(true);
    }
    console.log(nothing, "nothing");
    console.log(tableData, "tableData");
  };

  return (
    <>
      <div className=" container  p-md-5   my-3 text-dark fw-bold ">
        <div className="row signup-background shadow p-md-5">
          <div className="col p-3 display-3 my-2 col text-secondary display-3 text-break">
            Search Invoices based on keywords
          </div>
          <form>
            <div className="row justify-content-around p-3 my-md-4">
              <div className="col-md-5 col-12 my-3">
                <label className="form-label" htmlFor="key">
                  Select any field
                </label>
                <select
                  id="key"
                  className="form-select"
                  value={state.key}
                  onChange={async (ev) => {
                    setState((prev) => ({ ...prev, key: ev.target.value }));
                  }}
                >
                  <option value="0">Select anything</option>
                  {optionsArray.map((optionItem) => (
                    <option key={optionItem} value={optionItem}>
                      {optionItem}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-5 col-12 my-md-3">
                <label className="form-label" htmlFor="value">
                  Type your search Keyword
                </label>
                <input
                  type="text"
                  id="value"
                  className="form-control "
                  value={state.value}
                  onChange={(ev) => {
                    setState((prev) => ({ ...prev, value: ev.target.value }));
                  }}
                />

                <div className="form-text mb-3 pb-2 text-break text-danger">
                  eg: {helpText}
                </div>
              </div>
            </div>
            <div className="col-8 p-3 my-md-3 mx-auto">
              <div>
                {loading && (
                  <>
                    <MiniSpinner />
                  </>
                )}
                <button
                  className="w-100 btn btn-success "
                  onClick={(ev) => searchFunc(ev)}
                >
                  Search
                </button>
              </div>
            </div>
          </form>
          {/* here table */}
          {tableData && <SearchFoundList state={tableData} />}
          {nothing && <NothingToShow />}
        </div>
      </div>
    </>
  );
};

export default SearchInvoice;
