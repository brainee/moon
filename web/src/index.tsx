import React from "react";
import ReactDOM from "react-dom";
import "./index.less";
import App from "./pages/App";
import * as serviceWorker from "./serviceWorker";
import { LocaleProvider } from "antd";
import zhCN from "antd/lib/locale-provider/zh_CN";

ReactDOM.render(
  <LocaleProvider locale={zhCN}>
    <App />
  </LocaleProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
