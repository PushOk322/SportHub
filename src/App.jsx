import React from "react";
import { ReactDOM } from "react-dom";
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";

import { AuthProvider } from './data/AuthContext.js';

import store from "./data/store/index.js";

import "./styles/fonts.scss";
import "./styles/style.scss";

import Main from "./pages/Main/Main.jsx";
import LogIn from "./pages/LogIn/LogIn";
import ForgotPassword from "./pages/LogIn/ForgotPassword";
import NewPassword from "./pages/LogIn/NewPassword";
import SignUp from "./pages/LogIn/SignUp";
import PersonalInfo from "./pages/LogIn/PersonalInfo";
import CreatorMain from "./pages/Creator/CreatorMain";
import AddVideo from "./pages/Creator/AddVideo.jsx";
import Playlists from "./pages/Creator/Playlists.jsx";
import AddPlaylist from "./pages/Creator/AddPlaylist.jsx";
import PlaylistView from "./pages/Creator/PlaylistView.jsx";
import EditPlaylist from "./pages/Creator/EditPlaylist.jsx";
import Stores from "./pages/Creator/Stores.jsx";
import AddStore from "./pages/Creator/AddStore.jsx";
import EditProfile from "./pages/Creator/EditProfile.jsx";
import UserMain from "./pages/User/UserMain";
import SubscriptionView from "./pages/User/SubscriptionView.jsx";
import VideoPage from "./pages/User/VideoPage.jsx";

const App = () => {
    return (
        <>
            <AuthProvider>
                <nav className="site-nav">
                    <Link to="/">Home</Link>
                    <Link to="/LogIn">LogIn</Link>
                    <Link to="/ForgotPassword">ForgotPassword</Link>
                    <Link to="/NewPassword">NewPassword</Link>
                    <Link to="/SignUp">SignUp</Link>
                    <Link to="/PersonalInfo">PersonalInfo</Link>
                    <Link to="/CreatorMain">CreatorMain</Link>
                    <Link to="/AddVideo">AddVideo</Link>
                    <Link to="/Playlists">Playlists</Link>
                    <Link to="/AddPlaylist">AddPlaylist</Link>
                    <Link to="/PlaylistView">PlaylistView</Link>
                    <Link to="/EditPlaylist">EditPlaylist</Link>
                    <Link to="/Stores">Stores</Link>
                    <Link to="/AddStore">AddStore</Link>
                    <Link to="/EditProfile">EditProfile</Link>
                    <Link to="/UserMain">UserMain</Link>
                    <Link to="/SubscriptionView">SubscriptionView</Link>
                    <Link to="/VideoPage">VideoPage</Link>
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
                    <Route
                        path="/LogIn"
                        element={
                            <React.Suspense>
                                <LogIn />
                            </React.Suspense>
                        }
                    ></Route>
                    <Route
                        path="/ForgotPassword"
                        element={
                            <React.Suspense>
                                <ForgotPassword />
                            </React.Suspense>
                        }
                    ></Route>
                    <Route
                        path="/NewPassword"
                        element={
                            <React.Suspense>
                                <NewPassword />
                            </React.Suspense>
                        }
                    ></Route>
                    <Route
                        path="/SignUp"
                        element={
                            <React.Suspense>
                                <SignUp />
                            </React.Suspense>
                        }
                    ></Route>
                    <Route
                        path="/PersonalInfo"
                        element={
                            <React.Suspense>
                                <PersonalInfo />
                            </React.Suspense>
                        }
                    ></Route>
                    <Route
                        path="/CreatorMain"
                        element={
                            <React.Suspense>
                                <CreatorMain />
                            </React.Suspense>
                        }
                    ></Route>
                    <Route
                        path="/AddVideo"
                        element={
                            <React.Suspense>
                                <AddVideo />
                            </React.Suspense>
                        }
                    ></Route>
                    <Route
                        path="/UserMain"
                        element={
                            <React.Suspense>
                                <UserMain />
                            </React.Suspense>
                        }
                    ></Route>
                    <Route
                        path="/Playlists"
                        element={
                            <React.Suspense>
                                <Playlists />
                            </React.Suspense>
                        }
                    ></Route>
                    <Route
                        path="/AddPlaylist"
                        element={
                            <React.Suspense>
                                <AddPlaylist />
                            </React.Suspense>
                        }
                    ></Route>
                    <Route
                        path="/PlaylistView"
                        element={
                            <React.Suspense>
                                <PlaylistView />
                            </React.Suspense>
                        }
                    ></Route>
                    <Route
                        path="/EditPlaylist"
                        element={
                            <React.Suspense>
                                <EditPlaylist />
                            </React.Suspense>
                        }
                    ></Route>
                    <Route
                        path="/Stores"
                        element={
                            <React.Suspense>
                                <Stores />
                            </React.Suspense>
                        }
                    ></Route>
                    <Route
                        path="/AddStore"
                        element={
                            <React.Suspense>
                                <AddStore />
                            </React.Suspense>
                        }
                    ></Route>
                    <Route
                        path="/EditProfile"
                        element={
                            <React.Suspense>
                                <EditProfile />
                            </React.Suspense>
                        }
                    ></Route>
                    <Route
                        path="/UserMain"
                        element={
                            <React.Suspense>
                                <UserMain />
                            </React.Suspense>
                        }
                    ></Route>
                    <Route
                        path="/SubscriptionView"
                        element={
                            <React.Suspense>
                                <SubscriptionView />
                            </React.Suspense>
                        }
                    ></Route>
                    <Route
                        path="/VideoPage"
                        element={
                            <React.Suspense>
                                <VideoPage />
                            </React.Suspense>
                        }
                    ></Route>
                </Routes>
            </AuthProvider>
        </>
    );
};
export default App;
