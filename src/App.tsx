/*-----------IMPORT UTILITIES-----------*/
import React, { useEffect } from "react";
import {
  Route,
  Routes,
  useRoutes,
  BrowserRouter as Router,
  useNavigate,
} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useAppSelector, useAppDispatch } from "./app/hooks";
/*-----------IMPORT REDUCER-----------*/
import { fetchUserByEmail } from "./app/Reducers/userSlice";
/*-----------IMPORT COMPONENTS-----------*/
import Content from "./Views/Content";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Views/Profile";
import { EditProfile } from "./Components/Profile/EditProfile/EditProfile";
import Foro from "./Views/Foro";
import PostDetails from "./Views/PostDetails";
import CreatePost from "./Components/Creators/CreatePost/CreatePost";
import { CreateTheoric } from "./Components/Creators/CreateTheoric/CreateTheoric";
import LateralMenu from "./Components/Navbar/LateralMenu/LateralMenu";
import TheoricView from "./Views/TheoricView";
import Home from "./Views/Home";

const App = () => {
  const { isAuthenticated, user } = useAuth0();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const DBUser = useAppSelector((state) => state.user.data);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchUserByEmail(user?.email));
    }
  }, [user]);

  useEffect(() => {
    if (isAuthenticated && DBUser.user_name === "") {
      navigate(`/Profile/${DBUser?._id}/Edit`);
    }
  }, [DBUser]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a" element={<LateralMenu />} />
        <Route path="/Theoric/:id" element={<TheoricView />} />
        <Route path="/Content" element={<Content />} />
        <Route path="/Profile/:id" element={<Profile />} />
        <Route path="/Profile/:id/Edit" element={<EditProfile />} />
        <Route path="/Post/:id" element={<PostDetails />} />
        <Route path="/Forum/" element={<Foro />} />
        <Route path="/Ask" element={<CreatePost />} />
        <Route path="/Theoric/Create" element={<CreateTheoric />} />
      </Routes>
    </>
  );
};
export default App;
