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
import AddService from "./Component/AddService";
import Addservice1 from "./Component/Addservice1";
import SubAddcategory2 from "./Component/SubAddcategory2";
import Addservice3 from "./Component/Addservice3";
import SubCategoryList2 from "./Component/SubCategoryList2";
import CompletedBooking from "./Component/CompletedBooking";
import ServiceModal from "./Component/ServiceModal";
import WelcomePage from "./Component/WelcomePage";
import SubAdminLogin from "./Component/SubAdminLogin";
import CategoryVendor from "./Component/CategoryVendor";
import SubCategoryVendor from "./Component/SubCategoryVendor";
import SubCategory2Vendor from "./Component/SubCategory2Vendor";
import VendorRequest from "./Component/VendorRequest";
import ServiceList1 from "./Component/ServiceList1";
import ServiceList2 from "./Component/ServiceList2";
import ServiceList3 from "./Component/ServiceList3";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<WelcomePage />}></Route>
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
        <Route path="/AddService" element={<AddService />}></Route>
        <Route path="/Addservice1" element={<Addservice1 />}></Route>
        <Route path="/SubAddcategory2" element={<SubAddcategory2 />}></Route>
        <Route path="/Addservice3" element={<Addservice3 />}></Route>
        <Route path="/SubCategoryList2" element={<SubCategoryList2 />}></Route>
        <Route path="/CompletedBooking" element={<CompletedBooking />}></Route>
        <Route path="/AdminLogin" element={<Login />}></Route>
        <Route path="/SubAdminLogin" element={<SubAdminLogin />}></Route>
        <Route path="/CategoryVendor" element={<CategoryVendor />}></Route>
        <Route path="/VendorRequest" element={<VendorRequest />}></Route>
        <Route path="/ServiceList1" element={<ServiceList1 />}></Route>
        <Route path="/ServiceList2" element={<ServiceList2 />}></Route>
        <Route path="/ServiceList3" element={<ServiceList3 />}></Route>
        <Route
          path="/SubCategory2Vendor"
          element={<SubCategory2Vendor />}
        ></Route>
        <Route
          path="/SubCategoryVendor"
          element={<SubCategoryVendor />}
        ></Route>
        <Route
          path="/Acceptedservicemen"
          element={<Acceptedservicemen />}
        ></Route>
        <Route
          path="/Pendingservicemen"
          element={<Pendingservicemen />}
        ></Route>
        <Route path="/RejectServicemen" element={<RejectServicemen />}></Route>
        <Route path="/ServiceModal" element={<ServiceModal />}>
          {" "}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
