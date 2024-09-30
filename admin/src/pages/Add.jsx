/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { FiUploadCloud } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";

const Add = ({ url }) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    category: "Curry",
    price: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);

    const response = await axios.post(`${url}/api/product/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        category: "Curry",
        price: "",
      });
      setImage(false);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className="p-4 sm:p-10 w-full bg-white rounded-xl">
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col gap-y-5 max-w-[555px]"
      >
        <h4 className="bold-22 pb-2 uppercase">Products Upload</h4>
        <div className="flex flex-col gap-y-2 max-w-28 h-20 medium-15">
          <p>Upload Image</p>
          <label htmlFor="image">
            <div className="flexCenter ring-1 ring-slate-900/10 p-1 h-16">
              {image ? (
                <img
                  src={URL.createObjectURL(image)}
                  alt=""
                  className="p-1 h-16"
                />
              ) : (
                <FiUploadCloud className="text-4xl text-tertiary" />
              )}
            </div>
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="flex flex-col gap-y-2 medium-15">
          <p>Product name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            name="name"
            placeholder="Type here"
            type="text"
            required
            className="ring-1 ring-slate-900/10 py-1 px-3 outline-none resize-none"
          ></input>
        </div>
        <div className="flex flex-col gap-y-2 medium-15">
          <p>Product description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            placeholder="Write content here.."
            rows={6}
            required
            className="ring-1 ring-slate-900/10 py-1 px-3 outline-none resize-none"
          ></textarea>
        </div>
        <div className="flex items-center gap-x-6 text-gray-900/70 medium-15">
          <div className="flex flex-col gap-y-2">
            <p>Product category</p>
            <select
              onChange={onChangeHandler}
              value={data.category}
              name="category"
              className="outline-none ring-1 ring-offset-yellow-900/10 pl-2"
            >
              <option value="Curry">Curry</option>
              <option value="Pizza">Pizza</option>
              <option value="Rice">Rice</option>
              <option value="Deserts">Deserts</option>
              <option value="Drinks">Drinks</option>
              <option value="Fruits">Fruits</option>
            </select>
          </div>
          <div className="flex flex-col gap-y-2">
            <p>Product price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              name="price"
              type="number"
              placeholder="$10"
              className="ring-1 ring-slate-900/10 pl-2 outline-none"
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn-dark sm:w-5/12 flexCenter gap-x-2 !py-2 rounded"
        >
          <FaPlus />
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Add;
