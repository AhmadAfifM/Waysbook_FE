import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import NavsAuth from "./components/NavsAuth";
import NavsCustomer from "./components/NavsCustomer";
import NavsAdmin from "./components/NavsAdmin";
import CardBooks from "./components/card/CardBooks";
import CardAddCart from "./components/card/CardAddCart";
import BooksDetail from "./pages/BooksDetail";
import AddBooksProduct from "./pages/AddBooksProduct";
import DataTransactions from "./pages/DataTransactions";
import Profile from "./pages/Profile";
import MyCart from "./pages/MyCart";
import BooksList from "../src/pages/BooksList";
import ComplainAdmin from "../src/pages/ComplainAdmin";
import ComplainCustomer from "../src/pages/ComplainCustomer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/navsauth" element={<NavsAuth />} />
          <Route path="/navscustomer" element={<NavsCustomer />} />
          <Route path="/cardbooks" element={<CardBooks />} />
          <Route path="/cardaddcart" element={<CardAddCart />} />
          <Route path="/booksdetail" element={<BooksDetail />} />
          <Route path="/addbooksproduct" element={<AddBooksProduct />} />
          <Route path="/datatransactions" element={<DataTransactions />} />
          <Route path="/navsadmin" element={<NavsAdmin />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/mycart" element={<MyCart />} />
          <Route path="/booklist" element={<BooksList />} />
          <Route path="/complainadmin" element={<ComplainAdmin />} />
          <Route path="/complaincustomer" element={<ComplainCustomer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
