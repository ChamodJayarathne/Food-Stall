/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { FaBox } from "react-icons/fa";

const Orders = ({ url }) => {
  const [order, setOrder] = useState([]);

  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list");
    if (response.data.success) {
      setOrder(response.data.data);
      console.log(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  const statusHandler = async (event, orderId) => {
    const response = await axios.post(url + "/api/order/status", {
      orderId,
      status: event.target.value,
    });
    if (response.data.success) {
      await fetchAllOrders();
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="p-4 sm:p-10 box-border w-full bg-white rounded-xl">
      <h4 className="bold-22 uppercase">Orders page</h4>
      <div className="overflow-auto mt-5">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-900/20 text-gray-30 regular-14 xs:regular-16 text-start py-12">
              <th className="p-1 text-left hidden sm:table-cell">Package</th>
              <th className="p-1 text-left">Order</th>
              <th className="p-1 text-left">Items</th>
              <th className="p-1 text-left">Price</th>
              <th className="p-1 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {order.map((order, i) => (
              <tr
                key={i}
                className="border-b border-slate-900/20 text-gray-50 p-6 medium-14 text-left"
              >
                <td className="p-1 hidden sm:table-cell">
                  <FaBox className="text-2xl text-secondary" />
                </td>
                <td className="p-1">
                  <div className="py-2">
                    <p>
                      {order.items.map((item, index) => {
                        if (index === order.items.length - 1) {
                          return item.name + " x " + item.quantity;
                        } else {
                          return item.name + " x " + item.quantity + ", ";
                        }
                      })}
                    </p>
                  </div>
                  <hr className="w-1/2" />
                  <div>
                    <h5 className="medium-15">
                      {order.address.firstName + " " + order.address.lastName}
                    </h5>
                    <div>
                      <p>{order.address.street + ","}</p>
                      <p>
                        {order.address.city +
                          ", " +
                          order.address.state +
                          ", " +
                          order.address.country +
                          ", " +
                          order.address.zipcode}
                      </p>
                    </div>
                    <p>{order.address.phone}</p>
                  </div>
                </td>
                <td className="p-1">${order.amount}</td>
                <td className="p-1 text-center">{order.items.length}</td>
                <td className="p-1">
                  <select
                    onChange={(event) => statusHandler(event, order._id)}
                    value={order.status}
                    className="bg-primary ring-1 ring-secondary medium-14 max-w-20 xl:max-w-36"
                  >
                    <option value="Food Processing" className="medium-14">
                      Food Processing
                    </option>
                    <option value="Out For Delivery" className="medium-14">
                      Out For Delivery
                    </option>
                    <option value="Delivered" className="medium-14">
                      Delivered
                    </option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
