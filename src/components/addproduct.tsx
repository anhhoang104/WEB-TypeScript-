import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { formData } from "../interface/product";
import Header from "./header";
import Navbar from "./nav";
import Footer from "./footer";
import { api } from "../config/axios";

type Props = {
  onAdd: (data: formData) => void;
};
type ICategory = {
  id: number | string;
  name: string;
};
const AddProduct = ({ onAdd }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>();
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
  const onSubmit = (data: formData) => {
    onAdd(data);
  };

  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-20 mb-20 border-2 shadow-lg shadow-blue-500/50"
      >
        <h1 className="text-center text-2xl font-bold my-8 text-blue-900">
          Thêm sản phẩm
        </h1>
        <label htmlFor="">Tên sản phẩm:</label>
        <input
          type="text"
          {...register("name", {
            required: "Tên không được để trống",
            minLength: {
              value: 6,
              message: "Tên có ít nhất 6 kí tự",
            },
          })}
          placeholder="Tên sản phẩm"
          className=" block w-11/12 rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {errors.name && (
          <p className="text-red-700 ml-4">{errors.name.message}</p>
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
        <label htmlFor="">Giá sản phẩm:</label>
        <input
          type="number"
          {...register("price", {
            required: "Giá không được để trống",
            min: { value: 0, message: "Giá phải là số dương" },
          })}
          placeholder="Giá sản phẩm"
          className="block w-11/12 rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {errors.price && (
          <p className="text-red-700 ml-4">{errors.price.message}</p>
        )}

        <label htmlFor="">Danh mục:</label>

        <select
          {...register("category", {
            required: "Danh mục không được để trống",
          })}
        >
          <option value="">Chọn danh mục:</option>
          {categorys.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-red-700 ml-4">{errors.category.message}</p>
        )}
        <br />
        <label htmlFor="">Mô tả:</label>
        <input
          type="text"
          {...register("description", {
            required: "Mô tả không được để trống",
          })}
          placeholder="Mô tả"
          className="block w-11/12 rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {errors.description && (
          <p className="text-red-700 ml-4">{errors.description.message}</p>
        )}
        <button
          type="submit"
          className="bg-blue-500 text-white w-11/12 ml-3 h-10 rounded"
        >
          Thêm sản phẩm
        </button>
      </form>
      <Footer></Footer>;
    </>
  );
};
export default AddProduct;

// import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { formData } from "../interface/product";

// type Props = {
//   onAdd: (data: formData) => void;
// };

// const AddProduct = ({ onAdd }: Props) => {
//   const [categories, setCategories] = useState<string[]>([]);
//   const { register, handleSubmit, formState: { errors } } = useForm<formData>();

//   useEffect(() => {
//     // Fetch categories from the API
//     const fetchCategories = async () => {
//       try {
//         const response = await fetch('/api/categories'); // Replace with your API endpoint
//         const data = await response.json();
//         setCategories(data);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };

//     fetchCategories();
//   }, []);

//   const onSubmit = (data: formData) => {
//     onAdd(data);
//   };

//   return (
//     <>
//       <h1>ADD PRODUCT</h1>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <input
//           type="text"
//           {...register("name", {
//             required: "Name is required",
//             minLength: { value: 6, message: "Name must be at least 6 characters" }
//           })}
//           placeholder="Tên sản phẩm"
//         />
//         {errors.name && <p>{errors.name.message}</p>}
//         <br />
//         <input
//           type="text"
//           {...register("image", { required: "Image is required" })}
//           placeholder="Ảnh sản phẩm"
//         />
//         {errors.image && <p>{errors.image.message}</p>}
//         <br />
//         <input
//           type="number"
//           {...register("price", {
//             required: "Price is required",
//             min: { value: 0, message: "Price must be a non-negative number" }
//           })}
//           placeholder="Giá sản phẩm"
//         />
//         {errors.price && <p>{errors.price.message}</p>}
//         <br />
//         <select
//           {...register("category", { required: "Category is required" })}
//         >
//           <option value="">Chọn danh mục</option>
//           {categories.map((category) => (
//             <option key={category} value={category}>{category}</option>
//           ))}
//         </select>
//         {errors.category && <p>{errors.category.message}</p>}
//         <br />
//         <input
//           type="text"
//           {...register("description", { required: "Description is required" })}
//           placeholder="Mô tả"
//         />
//         {errors.description && <p>{errors.description.message}</p>}
//         <br />
//         <button type="submit">ADD-PRO</button>
//       </form>
//     </>
//   );
// };

// export default AddProduct;
