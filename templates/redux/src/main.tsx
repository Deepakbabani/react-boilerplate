import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <footer
        style={{ textAlign: "center", padding: "10px", marginTop: "20px" }}
      >
        <p>
          🚀 Built with 💙 by <strong>Deepak Babani</strong> 🚀
        </p>
      </footer>
    </Provider>
  </StrictMode>
);

