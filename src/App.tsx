import { Sidebar } from "./components/sidebar/Sidebar";
import { Topbar } from "./components/topbar/Topbar";
import "./app.css";
import { Home } from "./pages/home/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { UserList } from "./pages/userList/UserList";
import { User } from "./pages/user/User";
import { NewUser } from "./pages/newUser/NewUser";
import { ProductList } from "./pages/productList/ProductList";
import { Product } from "./pages/product/Product";
import { NewProduct } from "./pages/newProduct/NewProduct";
import { Login } from "./pages/login/Login";
import { useAppSelector } from "./store/hooks";

function App() {
  const admin = useAppSelector((state) => state.auth?.currentUser?.isAdmin);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            admin ? (
              <>
                <Topbar />
                <div className="container">
                  <Sidebar />
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/users" element={<UserList />} />
                    <Route path="/user/:id" element={<User />} />
                    <Route path="/newUser" element={<NewUser />} />
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="/newproduct" element={<NewProduct />} />
                  </Routes>
                </div>
              </>
            ) : (
              <Navigate to={"/login"} />
            )
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
