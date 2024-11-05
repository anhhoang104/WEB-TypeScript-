import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { formData2 } from "../interface/category";
import Header from "./header";
import Navbar from "./nav";
import Footer from "./footer";

type Props = {
  EditCate: (data: formData2, id: string | number) => void;
  getCategory: (id: string) => Promise<formData2>;
};

const Editcategory = ({ EditCate, getCategory }: Props) => {
  const { id } = useParams<{ id: string }>();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<formData2>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const category = await getCategory(id!);
        setValue("name", category.name);
        setValue("image", category.image);
      } catch (error) {
        console.error("Error fetching category details:", error);
      }
    };

    fetchCategory();
  }, [id, getCategory, setValue]);

  const onSubmit = (data: formData2) => {
    EditCate(data, id!);
    navigate("/categories"); // Navigate back to the categories list after editing
  };

  return (
    <div className="edit-category-form">
      <Header />
      <Navbar />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="my-20 border-2 shadow-lg shadow-blue-500/50"
      >
        <h1 className="text-center text-2xl font-bold my-8 text-red-900">
          EDIT CATEGORY
        </h1>
        <label htmlFor="">Tên sản phẩm</label>
        <input
          id="name"
          type="text"
          {...register("name", {
            required: "Tên không được để trống",
            minLength: {
              value: 3,
              message: "Tên phải có ít nhất 3 kí tự",
            },
          })}
          placeholder="Tên danh mục"
          className="block w-11/12 rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {errors.name && (
          <p className="text-red-700 ml-4">{errors.name.message}</p>
        )}
        <label htmlFor="">Ảnh sản phẩm</label>
        <input
          id="image"
          type="text"
          {...register("image", { required: "Ảnh không được để trống" })}
          placeholder="Ảnh sản phẩm"
          className=" block w-11/12 rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {errors.image && (
          <p className=" text-red-700 ml-4">{errors.image.message}</p>
        )}
        <button
          type="submit"
          className="bg-blue-500 text-white w-11/12 ml-3 h-10 rounded"
        >
          Sửa danh mục
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default Editcategory;
