
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Sale from "./pages/sale/Sale"; 
import NewSale from "./pages/newSale/NewSale";
import SalesList from "./pages/salesList/SalesList";
import Client from "./pages/client/Client"
import NewClient from "./pages/newClient/NewClient"
import ClientsList from "./pages/clientsList/ClientsList"
import Login from "./pages/login/Login"



function App() {
  return (
    <Router>
        <Switch>
      <Route exact path="/">
            <Login  />
          </Route>

      <div>
      <Topbar />
      <div className="container">
        <Sidebar />
          <Route  path="/home">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
          <Route path="/newSale">
            <NewSale />
          </Route>
          <Route path="/Sale/:SaleId">
            <Sale />
          </Route>
          <Route path="/Sales">
            <SalesList />
          </Route>
          <Route path="/newClient">
            <NewClient />
          </Route>
          <Route path="/Client/:ClientId">
            <Client />
          </Route>
          <Route path="/Clients">
            <ClientsList />
          </Route>
          
      </div>
      </div>
        </Switch>
    </Router>
  );
}

export default App;
