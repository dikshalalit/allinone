import { Routes, Route } from "react-router-dom";
import "./App.css";
import DashBoard from "./Component/DashBoard";
import AddCategory from "./Component/Addcategory";
import CategoryList from "./Component/CategoryList";
import SubAddCategory from "./Component/SubAddCategory";
import SubCategoryList from "./Component/SubCategoryList";
import BannerList from "./Component/BannerList";
import Banner from "./Component/Banner";
import Login from "./Component/Login";
import AllBooking from "./Component/AllBooking";
import UpcomingBooking from "./Component/UpcomingBooking";
import Pending from "./Component/Pending";
import RejectedBooking from "./Component/RejectedBooking";
import ServiceRequest from "./Component/Serviceman";
import AddSubAdmin from "./Component/AddSubAdmin";
import SubAdminList from "./Component/SubAdminList";
import Selector from "./Component/compo/Selector";
import Acceptedservicemen from "./Component/Acceptedservicemen";
import Pendingservicemen from "./Component/Pendingservicemen";
import RejectServicemen from "./Component/RejectServicemen";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/DashBoard" element={<DashBoard />}></Route>
        <Route path="/AddCategory" element={<AddCategory />}></Route>
        <Route path="/CategoryList" element={<CategoryList />}></Route>
        <Route path="/SubAddCategory" element={<SubAddCategory />}></Route>
        <Route path="/SubCategoryList" element={<SubCategoryList />}></Route>
        <Route path="/Banner" element={<Banner />}></Route>
        <Route path="/BannerList" element={<BannerList />}></Route>
        <Route path="/AllBooking" element={<AllBooking />}></Route>
        <Route path="/UpcomingBooking" element={<UpcomingBooking />}></Route>
        <Route path="/Pending" element={<Pending />}></Route>
        <Route path="/RejectedBooking" element={<RejectedBooking />}></Route>
        <Route path="/ServiceRequest" element={<ServiceRequest />}></Route>
        <Route path="/AddSubAdmin" element={<AddSubAdmin />}></Route>
        <Route path="/SubAdminList" element={<SubAdminList />}></Route>
        <Route path="/Selector" element={<Selector />}></Route>
        <Route
          path="/Acceptedservicemen"
          element={<Acceptedservicemen />}
        ></Route>
        <Route
          path="/Pendingservicemen"
          element={<Pendingservicemen />}
        ></Route>
        <Route path="/RejectServicemen" element={<RejectServicemen />}></Route>
      </Routes>
    </div>
  );
}

export default App;
