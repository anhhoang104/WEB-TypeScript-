import React from "react";
import { ICategory } from "../interface/category";
import Header from "./header";
import Navbar from "./nav";
import Footer from "./footer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

type Props = {
  categorys: ICategory[];
  deleteCate: (id: string | number) => void;
};

const ListCategory = ({ categorys, deleteCate }: Props) => {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <h1 className="text-2xl text-center font-bold my-8 text-blue-900">
        Thêm danh mục
      </h1>
      <Link
        to={`/category/add`}
        className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 ml-16 mb-12"
      >
        Thêm danh mục
      </Link>
      <br /> <br />
      <table className="container table table-bordered-blue table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên danh mục</th>
            <th>Ảnh</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {categorys.map((cate, index) => (
            <tr key={cate.id}>
              <td>{index + 1}</td>
              <td>{cate.name}</td>
              <td>
                <img src={cate.image} alt="" width={100} />
              </td>
              <td>
                <Link to={`/category/edit/${cate.id}`}>Sửa</Link>
                <button onClick={() => deleteCate(cate.id)}>Xoa</button>
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

export default ListCategory;
