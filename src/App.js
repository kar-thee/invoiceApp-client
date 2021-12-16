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
import Protected from "./components/Protected";

function App() {
  return (
    <>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />} />

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

          <Route path="/app">
            <Route
              path="dashboard"
              element={
                <Protected redirect={<Signin />}>
                  <Dashboard />
                </Protected>
              }
            />
            <Route path="" element={<NotFound />} />
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
