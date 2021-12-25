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
// import Navigation from "./components/Navigation";
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
            <Route path="*" element={<NotFound />} />
          </Route>

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
