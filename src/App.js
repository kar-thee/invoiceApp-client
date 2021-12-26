import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//publicLayout
import Home from "./components/Home";
// import Navigation from "./components/Navigation";
import NotFound from "./components/NotFound";
//authRoutes
import Signup from "./pages/public/views/Signup";
import Signin from "./pages/public/views/Signin";
import ForgotPassword from "./pages/public/views/ForgotPassword";
import ResetPassword from "./pages/public/views/ResetPassword";
import EmailActivation from "./pages/public/views/EmailActivation";
import UserProvider from "./context/UserProvider";
//privateRoutes
import Dashboard from "./pages/private/views/Dashboard";
import Features from "./pages/private/views/Features";
import Protected from "./components/Protected";

//userRoutes
import CreateUser from "./pages/private/CRUD/User/CreateUser";
import UpdateUser from "./pages/private/CRUD/User/UpdateUser";
import ReadUser from "./pages/private/CRUD/User/ReadUser";
import ReadOneUser from "./pages/private/CRUD/User/ReadOneUser";
import DeleteUser from "./pages/private/CRUD/User/DeleteUser";

//productRoutes
import CreateProduct from "./pages/private/CRUD/Product/CreateProduct";
import UpdateProduct from "./pages/private/CRUD/Product/UpdateProduct";
import ReadProducts from "./pages/private/CRUD/Product/ReadProducts";
import ReadOneProduct from "./pages/private/CRUD/Product/ReadOneProduct";
import DeleteProduct from "./pages/private/CRUD/Product/DeleteProduct";

//invoiceRoutes
import CreateInvoice from "./pages/private/CRUD/Invoice/CreateInvoice";
import UpdateInvoice from "./pages/private/CRUD/Invoice/UpdateInvoice";
import ReadAllInvoices from "./pages/private/CRUD/Invoice/ReadAllInvoices";
import ReadOneInvoice from "./pages/private/CRUD/Invoice/ReadOneInvoice";
import DeleteInvoice from "./pages/private/CRUD/Invoice/DeleteInvoice";

import Priorities from "./pages/private/views/Priorities";
import MainScreen from "./pages/private/views/MainScreen";

import Invoice from "./components/InvoicePage/Invoice";
import InvoicePdf from "./components/InvoicePage/InvoicePdf";

import NavigationBar from "./NavigationBar";

function App() {
  return (
    <>
      <UserProvider>
        <NavigationBar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/invoice/:id" element={<Invoice />} />
          <Route path="/invoicePdf/:id" element={<InvoicePdf />} />

          <Route path="/user">
            <Route path="signup" element={<Signup />} />
            <Route path="signin" element={<Signin />} />
            <Route path="forgotPassword" element={<ForgotPassword />} />
            <Route
              path="resetPassword/:resetString"
              element={<ResetPassword />}
            />
            <Route
              path="activate/:activationId"
              element={<EmailActivation />}
            />
            <Route path="" element={<NotFound />} />
          </Route>

          <Route
            path="/app"
            element={
              <Protected redirect={<Signin />}>
                <Dashboard />
              </Protected>
            }
          >
            <Route
              path=""
              element={
                <Protected redirect={<Signin />}>
                  <MainScreen />
                </Protected>
              }
            />
            <Route
              path="dashboard"
              element={
                <Protected redirect={<Signin />}>
                  <MainScreen />
                </Protected>
              }
            />
            <Route
              path="features"
              element={
                <Protected redirect={<Signin />}>
                  <Features />
                </Protected>
              }
            />
            <Route
              path="priority"
              element={
                <Protected redirect={<Signin />}>
                  <Priorities />
                </Protected>
              }
            />

            {/* here all user crud components */}
            <Route
              path="user/create"
              element={
                <Protected redirect={<Signin />}>
                  <CreateUser />
                </Protected>
              }
            />
            <Route
              path="user/update"
              element={
                <Protected redirect={<Signin />}>
                  <UpdateUser />
                </Protected>
              }
            />
            <Route
              path="user/readAll"
              element={
                <Protected redirect={<Signin />}>
                  <ReadUser />
                </Protected>
              }
            />
            <Route
              path="user/readOne"
              element={
                <Protected redirect={<Signin />}>
                  <ReadOneUser />
                </Protected>
              }
            />
            <Route
              path="user/delete"
              element={
                <Protected redirect={<Signin />}>
                  <DeleteUser />
                </Protected>
              }
            />

            {/* here product CRUD routes */}
            <Route
              path="product/create"
              element={
                <Protected redirect={<Signin />}>
                  <CreateProduct />
                </Protected>
              }
            />
            <Route
              path="product/update"
              element={
                <Protected redirect={<Signin />}>
                  <UpdateProduct />
                </Protected>
              }
            />
            <Route
              path="product/readAll"
              element={
                <Protected redirect={<Signin />}>
                  <ReadProducts />
                </Protected>
              }
            />
            <Route
              path="product/readOne"
              element={
                <Protected redirect={<Signin />}>
                  <ReadOneProduct />
                </Protected>
              }
            />
            <Route
              path="product/delete"
              element={
                <Protected redirect={<Signin />}>
                  <DeleteProduct />
                </Protected>
              }
            />

            {/* here invoice CRUD routes */}

            <Route
              path="invoice/create"
              element={
                <Protected redirect={<Signin />}>
                  <CreateInvoice />
                </Protected>
              }
            />
            <Route
              path="invoice/update"
              element={
                <Protected redirect={<Signin />}>
                  <UpdateInvoice />
                </Protected>
              }
            />
            <Route
              path="invoice/delete"
              element={
                <Protected redirect={<Signin />}>
                  <DeleteInvoice />
                </Protected>
              }
            />
            <Route
              path="invoice/:id"
              element={
                <Protected redirect={<Signin />}>
                  <ReadOneInvoice />
                </Protected>
              }
            />
            <Route
              path="invoice/readAll"
              element={
                <Protected redirect={<Signin />}>
                  <ReadAllInvoices />
                </Protected>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>

          <Route path="*" element={<NotFound />} />

          {/* here all app routes completes */}

          <Route path="*" element={<NotFound />} />
        </Routes>

        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </UserProvider>
    </>
  );
}

export default App;
