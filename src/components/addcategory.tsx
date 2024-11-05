import React from "react";
import { useForm } from "react-hook-form";
import Header from "./header";
import Navbar from "./nav";
import { formData2 } from "../interface/category";
import Footer from "./footer";

type Props = {
  AddCate: (data: formData2) => void;
};
type ICategory = {
  id: number | string;
  name: string;
  image: string;
};
const AddCategory = ({ AddCate }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICategory>();

  const onSubmit = (data: ICategory) => {
    AddCate(data);
  };

  return (
    <div className="add-category-form">
      <Header></Header>
      <Navbar></Navbar>
      <br />
      <br />
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          border: "1px solid black",
          margin: "auto",
          background: "aqua",
        }}
      >
        <h1 className="text-center text-2xl font-bold my-8 text-blue-900">
          Thêm danh mục
        </h1>
        <input
          type="text"
          {...register("name", {
            required: "Tên danh mục không được để trống ",
          })}
          placeholder="Tên danh mục"
          className="block w-11/12 rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {errors.name && (
          <p className=" text-red-700 ml-4">{errors.name.message}</p>
        )}
        <label htmlFor="">Ảnh sản phẩm</label>
        <input
          type="text"
          {...register("image", { required: "Ảnh không được để trống" })}
          placeholder="Ảnh sản phẩm"
          className="block w-11/12 rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {errors.image && (
          <p className="text-red-700 ml-4">{errors.image.message}</p>
        )}
        <button
          type="submit"
          className="mt-3 bg-blue-500 text-white w-11/12 ml-3 h-10 rounded"
        >
          thêm danh mục
        </button>
      </form>
      <br />
      <br />
      <Footer></Footer>
    </div>
  );
};

export default AddCategory;
