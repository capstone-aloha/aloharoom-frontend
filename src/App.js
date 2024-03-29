import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import PostMapPage from "./pages/PostMapPage";
import Login from "./pages/Login";
import RegisterPage from "./pages/RegisterPage";
import TermUser from "./pages/TermUser";
import RegisterPage2 from "./pages/RegisterPage2";
import About from "./pages/About/About";
import NewPostPage from "./pages/NewPostPage";
import PostInfoPage from "./pages/PostInfoPage";
// import Community from "./pages/Community/PostMapPage";
import CommunityInfoPage from "./pages/CommunityPost/PostInfoPage";
import CommunityPage from "./pages/CommunityPost/PostPage";
import MyInfoPage from "./pages/MyInfoPage";
import NewCommunityPostPage from "./pages/CommunityPost/NewCommunityPostPage";
import LikedListPage from "./pages/LikeListPage";
import MyWritePage from "./pages/MyWritePage";
import MyCommentPage from "./pages/MyCommentPage";
import RecentViewPage from "./pages/RecentViewPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/postMapPage" element={<PostMapPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/newPostPage" element={<NewPostPage />} />
        <Route path="/updatePostPage/:id" element={<NewPostPage />} />
        <Route
          path="/newCommunityPostPage"
          element={<NewCommunityPostPage />}
        />
        <Route path="/registerPage" element={<RegisterPage />} />
        <Route path="RegisterPage/registerPage2" element={<RegisterPage2 />} />
        <Route path="/termUser" element={<TermUser />} />
        <Route path="/myInfoPage" element={<MyInfoPage />} />
        <Route path="/likeListPage" element={<LikedListPage />} />
        <Route path="/myWritePage" element={<MyWritePage />} />
        <Route path="/myCommentPage" element={<MyCommentPage />} />
        <Route path="/recentViewPage" element={<RecentViewPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/postInfoPage" element={<PostInfoPage />} />
        <Route path="/postInfoPage/:id" element={<PostInfoPage />} />
        <Route
          path="/communityInfoPage/:communityId"
          element={<CommunityInfoPage />}
        />
        <Route
          path="/updateCommunityPostPage/:id"
          element={<NewCommunityPostPage />}
        />
        <Route path="/CommunityPage" element={<CommunityPage />} />
        <Route path="*" element={<>Not found</>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
