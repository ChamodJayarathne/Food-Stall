/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useContext } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";

const Verify = () => {
  const [searchParms, setSearchParams] = useSearchParams();
  const success = searchParms.get("success");
  const orderId = searchParms.get("orderId");
  const navigate = useNavigate();
  const { url } = useContext(ShopContext);

  
  const verifyPayment = async () => {
    const response = await axios.post(url + "/api/order/verify", {
      success,
      orderId,
    });
    if (response.data.success) {
      navigate("/myorders");
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    verifyPayment();
  }, []);

  return (
    <div>
      <div className="min-h-[60vh] grid">
        <div className="h-24 w-24 place-self-center border-4 border-t-secondary rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Verify;
