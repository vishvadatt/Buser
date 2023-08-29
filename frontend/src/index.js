import App from "App";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { store } from "./store/store";
// Soft UI Context Provider
import { SoftUIControllerProvider } from "context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <HashRouter>
      <SoftUIControllerProvider>
        <App />
        <ToastContainer autoClose={2000} />
      </SoftUIControllerProvider>
    </HashRouter>
  </Provider>
);
