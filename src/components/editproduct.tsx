import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { formData } from "../interface/product";
import Header from "./header";
import Navbar from "./nav";
import Footer from "./footer";
import { ICategory } from "../interface/category";
import { api } from "../config/axios";

type Props = {
  onEdit: (data: formData, id: string | number) => void;
  getProduct: (id: string) => Promise<formData>;
};

const EditProduct = ({ onEdit, getProduct }: Props) => {
  const { id } = useParams<{ id: string }>();
  const [categories, setCategories] = useState<string[]>([]);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<formData>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await getProduct(id!);
        setValue("name", product.name);
        setValue("image", product.image);
        setValue("price", product.price);
        setValue("category", product.category);
        setValue("description", product.description);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await fetch("/api/categories"); // Replace with your API endpoint
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchProduct();
    fetchCategories();
  }, [id, setValue]);

  const onSubmit = (data: formData) => {
    onEdit(data, id!);
    navigate("/products"); // Navigate back to the product list after editing
  };
  const [categorys, setCategory] = useState<ICategory[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get("http://localhost:3000/categorys");
        setCategory(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="edit-product-form">
      <Header></Header>
      <Navbar></Navbar>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="my-20 border-2 shadow-lg shadow-blue-500/50"
      >
        <h1 className="text-center text-2xl font-bold my-8 text-red-900">
          EDIT PRODUCT
        </h1>
        <label htmlFor="">Tên sản phẩm</label>
        <input
          id="name"
          type="text"
          {...register("name", {
            required: "Tên không được để trống",
            minLength: {
              value: 6,
              message: "Tên phải có ít nhất 6 kí tự",
            },
          })}
          placeholder="Tên sản phẩm"
          className=" block w-11/12 rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {errors.name && (
          <p className=" text-red-700 ml-4">{errors.name.message}</p>
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
        <label htmlFor="">Giá sản phẩm</label>
        <input
          id="price"
          type="number"
          {...register("price", {
            required: "Giá không được để trống",
            min: { value: 0, message: "Giá phải là số dương" },
          })}
          placeholder="Giá sản phẩm"
          className=" block w-11/12 rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {errors.price && (
          <p className=" text-red-700 ml-4">{errors.price.message}</p>
        )}

        <div className="form-group">
          <label htmlFor="category" className="ml-4">
            Danh mục:
          </label>
          <select
            {...register("category", {
              required: "Danh mục không được để trống",
            })}
          >
            <option value="">Chọn danh mục</option>
            {categorys.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className=" text-red-700 ml-4">{errors.category.message}</p>
          )}
        </div>
        <label htmlFor="">Mô tả</label>
        <input
          id="description"
          type="text"
          {...register("description", {
            required: "Mô tả không được để trống",
          })}
          placeholder="Mô tả sản phẩm"
          className=" block w-11/12 rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {errors.description && (
          <p className=" text-red-700 ml-4">{errors.description.message}</p>
        )}

        <button
          type="submit"
          className="bg-blue-500 text-white w-11/12 ml-3 h-10 rounded"
        >
          Sửa sản phẩm
        </button>
      </form>
      <Footer></Footer>
    </div>
  );
};

export default EditProduct;
