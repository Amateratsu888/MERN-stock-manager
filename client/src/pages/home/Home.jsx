import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import axios from "axios";
import { useState, useEffect } from "react";


export default function Home() {


  const [data, setData] = useState()
  const fetchData = async () => {
      const response = await axios(
          'http://localhost:5000/admin/products/productsList',
      )
      setData(response.data)

  }
  useEffect(() => {
      fetchData()
  }, [])

  return (

    
    <div className="home">
      <FeaturedInfo />
      <Chart data={data} title="Products Analytics" grid dataKey="qte"/>
      <div className="homeWidgets">
        
        
      </div>
    </div>
  );
}
