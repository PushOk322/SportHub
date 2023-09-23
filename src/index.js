import React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./styles/style.scss";

import { BrowserRouter, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./data/store/index.js";

ReactDOM.render(
	<Provider store={store}>
		<HashRouter>
			<App />
		</HashRouter>
	</Provider>,
	document.getElementById("root")
);
