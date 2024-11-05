import React from "react";
import { IProduct } from "../interface/product";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Header from "./header";
import Navbar from "./nav";
import Footer from "./footer";

type Props = {
  products: IProduct[];
  onDelete: (id: string | number) => void;
};

const Dashboard = ({ products, onDelete }: Props) => {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <h1 className="text-2xl text-center font-bold my-8 text-blue-900">
        Danh sách
      </h1>
      <Link
        to={`/product/add`}
        className="text-center bg-blue-600  py-2 px-6 rounded hover:bg-blue-700 ml-16 mb-12"
      >
        Thêm sản phẩm
      </Link>
      <br /> <br />
      <table className="container table table-bordered table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên sp</th>
            <th>Ảnh</th>
            <th>Giá</th>
            <th>Danh mục</th>
            <th>Mô tả</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {products.map((pro, index) => (
            <tr key={pro.id}>
              <td>{index + 1}</td>
              <td>{pro.name}</td>
              <td>
                <img src={pro.image} alt="" width={100} />
              </td>
              <td>{pro.price}</td>
              <td>{pro.category}</td>
              <td>{pro.description}</td>
              <td>
                <Link to={`/product/edit/${pro.id}`}>Sửa</Link>
                <button onClick={() => onDelete(pro.id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br /> <br />
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
