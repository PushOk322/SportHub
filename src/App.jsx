import React from "react";
import { ReactDOM } from "react-dom";
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";


import Main from "./components/pages/Main/Main.jsx";

import "./styles/fonts.scss";
import "./styles/style.scss";

const App = () => {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
            </nav>
            <Routes>
                <Route
                    path="/"
                    element={
                        <React.Suspense>
                            <Main />
                        </React.Suspense>
                    }
                ></Route>

            </Routes>
        </>
    );
};
export default App;
