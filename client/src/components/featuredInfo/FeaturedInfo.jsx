import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";

export default function FeaturedInfo() {




  const [dataProduct, setDataProduct] = useState([])
  const [dataSale, setDataSale] = useState([])
  const [dataClient, setDataClient] = useState([])
  const fetchDataProduct = async () => {
      const response = await axios(
          'http://localhost:5000/admin/products/productsList',
      )
      setDataProduct(response.data)

  }

  const fetchDataSale = async () => {
    const response = await axios(
        'http://localhost:5000/admin/commands/commandsList',
    )
    setDataSale(response.data)

}

const fetchDataClient = async () => {
  const response = await axios(
      'http://localhost:5000/admin/cilents/clientsList',
  )
  setDataClient(response.data)

}







  useEffect(() => {
      fetchDataProduct()
      fetchDataSale()
      fetchDataClient()
  }, [])




  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Products</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{dataProduct.length}</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{dataSale.length}</span>
          <span className="featuredMoneyRate">
            -14 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Clients</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{dataClient.length}</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
