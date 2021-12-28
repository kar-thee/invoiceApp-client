import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import GetOneInvoiceApi from "../../../../apis/private/Invoice/GetOneInvoiceApi";

import Loader from "../../../../helpers/Loader";

import useDispatchFunc from "../../../../hooks/useDispatchFunc";
import useStatesFunc from "../../../../hooks/useStatesFunc";

const UpdateInvoice = () => {
  const [state, setState] = useState();
  const [dispatch] = useDispatchFunc();
  const [{ loading }] = useStatesFunc();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getinvoiceData = async () => {
      dispatch({ type: "loadingStart" });

      // this is for Details esssential for invoice
      const { data } = await GetOneInvoiceApi(id);
      dispatch({ type: "loadingStop" });
      if (data.type === "success") {
        toast.success(data.msg);
        setState(data.invoiceFound);
      } else {
        toast.warning(data.msg);
        navigate(-1);
      }
    };
    getinvoiceData();
  }, [dispatch, id, navigate]);

  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return <div>{state && JSON.stringify(state)}</div>;
};

export default UpdateInvoice;
