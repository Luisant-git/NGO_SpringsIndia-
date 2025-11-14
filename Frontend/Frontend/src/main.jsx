import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { JobContextProvider } from "./Context/JobContext";
import "./index.css";
import "swiper/swiper.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "react-toastify/dist/ReactToastify.css";
import "rc-slider/assets/index.css";
import { ToastContainer } from "react-toastify";
import store from "./store/store";
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import FileUpload from "./demo";

ReactDOM.createRoot(document.getElementById("root")).render(
  <JobContextProvider>
    <Provider store={store}>
    <BrowserRouter>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />

 <FileUpload/>
    </BrowserRouter>
    </Provider>
  </JobContextProvider>
);
