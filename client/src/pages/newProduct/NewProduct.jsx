import "./newProduct.css";
import { useState } from "react";
import axios from "axios";
export default function NewProduct() {
  const [data, setData] = useState({
    product_name: "",
    product_mark: "",
    product_cat: "",
    price: "",
    qte: "",
    expired_date: "",
  });

  const handleForm = e => {
    const newData = {...data}
    newData[e.target.id] = e.target.value 
    setData(newData)
  }
  
const submitHandler = e =>{
  e.preventDefault()
  axios
  .post("http://localhost:5000/admin/products/productPost", data)
  
}

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm" onSubmit={e=>submitHandler(e)}>
        <div className="addProductItem">
          <label>Mark</label>
          <input
            type="text"
            id="product_mark"
            onChange={(e) => handleForm(e)}
          />
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input
            type="text"
            id="product_name"
            onChange={(e) => handleForm(e)}
          />
        </div>
        <div className="addProductItem">
          <label>expired date</label>
          <input
            type="date"
            id="expired_date"
            onChange={(e) => handleForm(e)}
          />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <input
            type="number"
            min="0"
            id="qte"
            onChange={(e) => handleForm(e)}
          />
        </div>
        <div className="addProductItem">
          <label>price</label>
          <input
            type="number"
            min="0"
            id="price"
            onChange={(e) => handleForm(e)}
          />
        </div>
        <div className="addProductItem">
          <label>categorie</label>
          <select
            name="active"
            id="product_cat"
            onChange={(e) => handleForm(e)}
          >
            <option value="petit dejeuner">petit dejeuner</option>
            <option value="assaisonnement">assaisonnement</option>
            <option value="bazard">bazard</option>
            <option value="beaute">beaute</option>
            <option value="boite de conserve">boite de conserve</option>
            <option value="boisson gazeuse">boisson gazeuse</option>
            <option value="jus">jus</option>
            <option value="nettoyage">nettoyage</option>
            <option value="patisserie">patisserie</option>
            <option value="patte alimentaire">patte alimentaire</option>
          </select>
        </div>
        <button type="submit" className="addProductButton">
          Create
        </button>
      </form>
    </div>
  );
}
