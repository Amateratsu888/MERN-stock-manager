import { Link , useLocation , useParams} from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart";
import { useState } from "react";
import axios from "axios";

export default function Product() {

    const {productId} = useParams()
    const data = useLocation()
    const productData = data.state.filter(item => item.product_name === productId)
    const [form,setForm] = useState({
        product_name: productData[0].product_name,
        product_mark : productData[0].product_mark,
        product_cat : productData[0].product_cat,
        price : productData[0].price,
        qte : productData[0].qte,
        expired_date : productData[0].expired_date
    })

    const handleForm = (e) => {
        const newForm = {...form}
        newForm[e.target.id] = e.target.value
        setForm(newForm);
        
};

    const handleSubmit = e =>{
        e.preventDefault()
        axios.put(`http://localhost:5000/admin/products/updateProduct/${productData[0]._id}`,form)
    
    }

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData[0]} dataKey="qte" title="Stock Performance" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <span className="productName">{productData[0].product_name}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">Mark:  </span>
              <span className="productInfoValue">{productData[0].mark}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">category:</span>
              <span className="productInfoValue">{productData[0].product_cat}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">price:</span>
              <span className="productInfoValue">{productData[0].price}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">:</span>
              <span className="productInfoValue">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm" onSubmit ={e=>handleSubmit(e)} >
          <div className="productFormLeft">
            <div className="addProductItem">
              <label>Mark</label>
              <input
                type="text"
                id="product_mark"
                onChange={(e) => handleForm(e)}
                value={form.product_mark}
              />
            </div>
            <div className="addProductItem">
              <label>Name</label>
              <input
                type="text"
                id="product_name"
                onChange={(e) => handleForm(e)}
                value={form.product_name}
              />
            </div>
            <div className="addProductItem">
              <label>expired date</label>
              <input
                type="date"
                id="expired_date"
                onChange={(e) => handleForm(e)}
                value={form.expired_date}
              />
            </div>
            <div className="addProductItem">
              <label>Stock</label>
              <input
                type="number"
                min="0"
                id="qte"
                onChange={(e) => handleForm(e)}
                value={form.qte}
              />
            </div>
            <div className="addProductItem">
              <label>price</label>
              <input
                type="number"
                min="0"
                id="price"
                onChange={(e) => handleForm(e)}
                value={form.price}
              />
            </div>
            <div className="addProductItem">
              <label>categorie</label>
              <select
                name="active"
                id="product_cat"
                onChange={(e) => handleForm(e)}
                value={form.product_cat}
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
          </div>
          <div className="productFormRight">
            <div className="productUpload"></div>
            <button type='submit' className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
