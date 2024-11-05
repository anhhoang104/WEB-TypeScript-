import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./components/dashboard";
import AddProduct from "./components/addproduct";
import { formData, IProduct } from "./interface/product";
import { api } from "./config/axios";
import EditProduct from "./components/editproduct";
import AddCategory from "./components/addcategory";
import { formData2, ICategory } from "./interface/category";
import Home from "./components/home";
import ProductDetail from "./components/productDetail";
import ListPro from "./components/listPro";
import ListCategory from "./components/listcategory";
import Editcategory from "./components/editcategory";
import CategoryProduct from "./components/categoryProduct";

const App = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categorys, setCategory] = useState<ICategory[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const { data: productData } = await api.get("products");
        setProducts(productData);
        const { data: categoryData } = await api.get("categorys");
        setCategory(categoryData);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  //Product
  const onAdd = async (dataproduct: formData) => {
    try {
      const { data } = await api.post("products", dataproduct);
      const newproduct = [...products, data];
      setProducts(newproduct);
      alert("Thêm mới thành công");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const onDelete = async (id: number | string) => {
    if (confirm("Bạn chắc chứ?")) {
      try {
        await api.delete(`products/${id}`);
        alert("Xóa thành công");
        const newproducts = products.filter((product) => product.id !== id);
        setProducts(newproducts);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const onEdit = async (dataproduct: formData, id: number | string) => {
    try {
      const { data } = await api.put(`products/${id}`, dataproduct);
      const newproduct = products.map((product) =>
        product.id == id ? data : product
      );
      setProducts(newproduct);
      alert("Cập nhật thành công");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const getProduct = async (id: string): Promise<formData> => {
    try {
      const { data } = await api.get(`products/${id}`);
      return data;
    } catch (error) {
      console.error("Error fetching product details:", error);
      throw error;
    }
  };

  // Category
  const onAddCategory = async (dataCategory: formData2) => {
    try {
      const { data } = await api.post("categorys", dataCategory);
      const newCategories = [...categorys, data];
      setCategory(newCategories);
      alert("Thêm mới thành công");
      navigate("/listcategory");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCate = async (id: number | string) => {
    if (confirm("Bạn có muốn xóa không?")) {
      try {
        await api.delete(`categorys/${id}`);
        alert("Xóa thành công");
        const newCategories = categorys.filter(
          (category) => category.id !== id
        );
        setCategory(newCategories);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const EditCategory = async (dataCategory: formData2, id: number | string) => {
    try {
      const { data } = await api.put(`categorys/${id}`, dataCategory);
      const newCategories = categorys.map((category) =>
        category.id == id ? data : category
      );
      setCategory(newCategories);
      alert("Cập nhật danh mục thành công");
      navigate("/listcategory");
    } catch (error) {
      console.log(error);
    }
  };

  const getCategory = async (id: string): Promise<formData2> => {
    try {
      const { data } = await api.get(`categorys/${id}`);
      return data;
    } catch (error) {
      console.error("Error fetching product details:", error);
      throw error;
    }
  };
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/listpro" element={<ListPro />}></Route>
        <Route path="/productDetail/:id" element={<ProductDetail />}></Route>
        <Route
          path="/dashboard"
          element={<Dashboard onDelete={onDelete} products={products} />}
        ></Route>
        <Route
          path="product/add"
          element={<AddProduct onAdd={onAdd} />}
        ></Route>
        <Route
          path="product/edit/:id"
          element={<EditProduct onEdit={onEdit} getProduct={getProduct} />}
        ></Route>

        {/* Category */}

        <Route
          path="/listcategory"
          element={
            <ListCategory categorys={categorys} deleteCate={deleteCate} />
          }
        ></Route>
        <Route
          path="/category/add"
          element={<AddCategory AddCate={onAddCategory} />}
        ></Route>
        <Route
          path="/category/edit/:id"
          element={
            <Editcategory EditCate={EditCategory} getCategory={getCategory} />
          }
        ></Route>
        <Route path="/category/:id" Component={CategoryProduct} />
      </Routes>
    </div>
  );
};

export default App;
