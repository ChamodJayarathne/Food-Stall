/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Order = () => {
  const { all_products, cartItems, getTotalCartAmount, url, token } =
    useContext(ShopContext);
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const placeOrder = async (e) => {
    e.preventDefault();
    let orderItems = [];
    all_products.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    };
    let response = await axios.post(url + "/api/order/place", orderData, {
      headers: { token },
    });
    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);
    } else {
      alert("Error");
    }
  };


useEffect(()=>{
  if(!token){
    navigate("/cart")
  }else if(getTotalCartAmount()===0){
    navigate("/cart")
  }
},[token])

  return (
    <div className="max-padd-container py-28 xl:py-32">
      <form
        onSubmit={placeOrder}
        className="flex flex-col xl:flex-row gap-20 xl:gap-28"
      >
        {/* delivery charges */}
        <div className="flex flex-1 flex-col gap-3 text-[95%]">
          <h3 className="bold-28 mb-4">Delivery Information</h3>
          <div className="flex gap-3">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2"
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            required
            className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2"
          />
          <input
            type="text"
            name="street"
            placeholder="Street"
            required
            className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2"
          />
          <div className="flex gap-3">
            <input
              type="text"
              name="city"
              placeholder="City"
              required
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2"
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              required
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2"
            />
          </div>
          <div className="flex gap-3">
            <input
              type="text"
              name="zipcode"
              placeholder="Zip Code"
              required
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2"
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              required
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2"
            />
          </div>
        </div>
        {/* cart total */}
        <div className="flex flex-1 flex-col">
          <div className="flex flex-col gap-2">
            <h4 className="bold-22">Summary</h4>
            <div className="">
              <div className="flexBetween py-3">
                <h4 className="medium-16">SubTotal:</h4>
                <h4 className="text-gray-30 font-semibold">
                  ${getTotalCartAmount()}
                </h4>
              </div>
              <hr className="h-[2px] bg-slate-900/15 border-none outline-none" />
              <div className="flexBetween py-3">
                <h4 className="medium-16">Shipping Fee:</h4>
                <h4 className="text-gray-30 font-semibold">
                  ${getTotalCartAmount() === 0 ? 0 : 2}
                </h4>
              </div>
              <hr className="h-[2px] bg-slate-900/15 border-none outline-none" />
              <div className="flexBetween py-3">
                <h4 className="bold-18">Total:</h4>
                <h4 className="bold-18">
                  ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
                </h4>
              </div>
            </div>
            <button type="submit" className="btn-secondary w-52 rounded">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Order;
